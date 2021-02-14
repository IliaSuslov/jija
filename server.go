package main

import (
	"context"
	"fmt"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/alexsuslov/jija/graph"
	"github.com/alexsuslov/jija/graph/generated"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"net/http"
	"os"
	"time"
)

var version = "develop preview"

var s = struct {
	host     string
	port     string
	URI      string
	database string
}{
	"localhost",
	"8080",
	"mongodb://localhost",
	"jija",
}

func main() {
	fmt.Printf("Wasty GQL Starting %s...\n", version)
	godotenv.Load()

	set := []*string{&s.host, &s.port, &s.URI, &s.database}
	names := []string{"HOST", "PORT", "MONGO_URI", "MONGO_DATABASE"}
	for i, name := range names {
		v := os.Getenv(name)
		if os.Getenv(name) != "" {
			*set[i] = v
		}
	}
	client, err := mongo.NewClient(options.Client().ApplyURI(s.URI))
	if err != nil {
		log.Fatal(err)
	}
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)
	DB := client.Database(s.database)

	srv := handler.NewDefaultServer(
		generated.NewExecutableSchema(
			generated.Config{
				Resolvers: &graph.Resolver{DB}}))
	var router = mux.NewRouter()
	// GraphQL playground
	if os.Getenv("GRAPHQL_CLI") == "YES" {
		fmt.Printf("Enable /cli - GraphQL playground\n")
		router.Handle("/cli", playground.Handler("GraphQL playground", "/query"))
	}
	router.Handle("/query", srv)

	log.Printf("Bind to http://%s:%s\n", s.host, s.port)
	if err := http.ListenAndServe(s.host+":"+s.port, router); err != nil {
		log.Printf("Address http://%s:%s/ already in use. Try bind http://%s:1%s/\n",
			s.host, s.port,
			s.host, s.port)
		log.Fatal(http.ListenAndServe(s.host+":1"+s.port, nil))
	}
}
