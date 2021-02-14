package db

import "go.mongodb.org/mongo-driver/bson/primitive"

type Printer struct {
	ID      primitive.ObjectID `json:"_id" bson:"_id"`
	Name   string `json:"name"`
	FirmID string `json:"firmID"`
	Type   string `json:"type"`
}