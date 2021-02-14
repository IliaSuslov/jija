package db

import "go.mongodb.org/mongo-driver/bson/primitive"

type Firm struct {
	ID      primitive.ObjectID `json:"_id" bson:"_id"`
	Name string `json:"name"`
	Site string `json:"site"`
}
