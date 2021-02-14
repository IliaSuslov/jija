package db

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Resin struct {
	ID      primitive.ObjectID `json:"_id" bson:"_id"`
	Name    string             `json:"name"`
	Desc    string             `json:"desc"`
	Tags    []*Tag       `json:"tags"`
	Deleted bool               `json:"deleted"`
}
