package db

import "go.mongodb.org/mongo-driver/bson/primitive"

type Tag struct {
	ID   primitive.ObjectID `json:"_id" bson:"_id"`
	Name string             `json:"name"`
	Desc string             `json:"desc"`
}
