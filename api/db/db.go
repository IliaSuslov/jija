package db

import (
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type IDB interface {
	Collection(string, ...*options.CollectionOptions) *mongo.Collection
}
