package db

import (
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// new item
func NewItem(col *mongo.Collection, ctx context.Context, input interface{}) (res *mongo.SingleResult, err error){
	result, err := col.InsertOne(ctx, input)
	if err != nil {
		return nil, err
	}
	return GetItem(col, ctx, result.InsertedID)
}

//Get Item
func GetItem(col *mongo.Collection, ctx context.Context, ID interface{}) (*mongo.SingleResult, error) {
	return col.FindOne(ctx, bson.M{"_id": ID}), nil
}

// Update Item
func UpdateItem(col *mongo.Collection, ctx context.Context,
	ID interface{}, Item interface{})(*mongo.SingleResult, error){

	_, err:= col.UpdateOne(ctx, bson.M{"_id":ID}, bson.M{"$set":Item})
	if err != nil {
		return nil, err
	}
	return GetItem(col, ctx, ID)
}

// delete Item
func DelItem(col *mongo.Collection, ctx context.Context, ID interface{}) error {
	_, err := col.DeleteOne(ctx, bson.M{"_id": ID})
	return err
}


//get Items
func GetItems(col *mongo.Collection, ctx context.Context, filter interface{},
	opts *options.FindOptions) (Cur *mongo.Cursor, err error) {
	return col.Find(ctx, filter, opts)
}
