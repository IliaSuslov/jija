package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/alexsuslov/jija/api/db"
	"github.com/alexsuslov/jija/api/query"
	"github.com/alexsuslov/jija/graph/generated"
	"github.com/alexsuslov/jija/graph/model"
	"github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (r *firmResolver) ID(ctx context.Context, obj *db.Firm) (string, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) NewResin(ctx context.Context, input model.InputResin) (*db.Resin, error) {
	res, err := db.NewItem(r.Db.Collection("resins"), ctx, input)
	if err != nil {
		return nil, err
	}
	resin := &db.Resin{}
	return resin, res.Decode(resin)
}

func (r *mutationResolver) UpdateResin(ctx context.Context, id string, input model.InputResin) (*db.Resin, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	res, err := db.UpdateItem(r.Db.Collection("resins"), ctx, ID, input)
	if err != nil {
		return nil, err
	}
	resin := &db.Resin{}
	return resin, res.Decode(resin)
}

func (r *mutationResolver) DelResin(ctx context.Context, id string) (bool, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return false, err
	}
	err = db.DelItem(r.Db.Collection("resins"), ctx, ID)
	return true, err
}

func (r *mutationResolver) NewFirm(ctx context.Context, input model.InputFirm) (*db.Firm, error) {
	res, err := db.NewItem(r.Db.Collection("firms"), ctx, input)
	if err != nil {
		return nil, err
	}
	item := &db.Firm{}
	return item, res.Decode(item)
}

func (r *mutationResolver) UpdateFirm(ctx context.Context, id string, input model.InputFirm) (*db.Firm, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	res, err := db.UpdateItem(r.Db.Collection("firms"), ctx, ID, input)
	if err != nil {
		return nil, err
	}
	item := &db.Firm{}
	return item, res.Decode(item)
}

func (r *mutationResolver) NewPrinter(ctx context.Context, input model.InputPrinter) (*db.Printer, error) {
	res, err := db.NewItem(r.Db.Collection("printers"), ctx, input)
	if err != nil {
		return nil, err
	}
	item := &db.Printer{}
	return item, res.Decode(item)
}

func (r *mutationResolver) UpdatePrinter(ctx context.Context, id string, input model.InputPrinter) (*db.Printer, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	res, err := db.UpdateItem(r.Db.Collection("printers"), ctx, ID, input)
	if err != nil {
		return nil, err
	}
	item := &db.Printer{}
	return item, res.Decode(item)
}

func (r *mutationResolver) NewType(ctx context.Context, input model.InputType) (*db.Type, error) {
	res, err := db.NewItem(r.Db.Collection("types"), ctx, input)
	if err != nil {
		return nil, err
	}
	item := &db.Type{}
	return item, res.Decode(item)
}

func (r *mutationResolver) UpdateType(ctx context.Context, id string, input model.InputType) (*db.Type, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	res, err := db.UpdateItem(r.Db.Collection("types"), ctx, ID, input)
	if err != nil {
		return nil, err
	}
	item := &db.Type{}
	return item, res.Decode(item)
}

func (r *mutationResolver) NewTag(ctx context.Context, input model.InputTag) (*db.Tag, error) {
	res, err := db.NewItem(r.Db.Collection("tags"), ctx, input)
	if err != nil {
		return nil, err
	}
	item := &db.Tag{}
	return item, res.Decode(item)
}

func (r *mutationResolver) UpdateTag(ctx context.Context, id string, input model.InputTag) (*db.Tag, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}
	res, err := db.UpdateItem(r.Db.Collection("tags"), ctx, ID, input)
	if err != nil {
		return nil, err
	}
	item := &db.Tag{}
	return item, res.Decode(item)
}

func (r *printerResolver) ID(ctx context.Context, obj *db.Printer) (string, error) {
	return obj.ID.Hex(), nil
}

func (r *queryResolver) Resins(ctx context.Context, filter *model.FilterResin, options *model.Options) ([]*db.Resin, error) {
	f := query.NewQuery()

	if filter != nil {
		f.
			AddRegExp("name", filter.Name, "ig").
			AddRegExp("desc", filter.Desc, "ig").
			Add("tags", filter.Tag)

	}
	o := query.NewFindOptions()
	if options != nil {
		o.
			SetLimit(options.Limit).
			SetSkip(options.Skip).
			SetOrder(options.Order)

	}

	cur, err := db.GetItems(r.Db.Collection("resins"), ctx, f, o.FindOptions())
	if err != nil {
		return nil, err
	}

	Items := []*db.Resin{}
	err = cur.All(ctx, &Items)
	if err != nil {
		logrus.WithFields(logrus.Fields{
			"err": err,
		}).Error("cur.All")
	}

	return Items, nil
}

func (r *queryResolver) ResinByID(ctx context.Context, id string) (*db.Resin, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	res, err := db.GetItem(r.Db.Collection("resins"), ctx, ID)

	if err != nil {
		return nil, err
	}
	resin := &db.Resin{}
	return resin, res.Decode(resin)
}

func (r *queryResolver) Firms(ctx context.Context) ([]*db.Firm, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) FirmByID(ctx context.Context, id string) (*db.Firm, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	res, err := db.GetItem(r.Db.Collection("firms"), ctx, ID)

	if err != nil {
		return nil, err
	}
	item := &db.Firm{}
	return item, res.Decode(item)
}

func (r *queryResolver) Printers(ctx context.Context) ([]*db.Printer, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) PrinterByID(ctx context.Context, id string) (*db.Printer, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	res, err := db.GetItem(r.Db.Collection("printers"), ctx, ID)

	if err != nil {
		return nil, err
	}
	item := &db.Printer{}
	return item, res.Decode(item)
}

func (r *queryResolver) Types(ctx context.Context) ([]*db.Type, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) TypeByID(ctx context.Context, id string) (*db.Type, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	res, err := db.GetItem(r.Db.Collection("types"), ctx, ID)

	if err != nil {
		return nil, err
	}
	item := &db.Type{}
	return item, res.Decode(item)
}

func (r *queryResolver) Tags(ctx context.Context) ([]*db.Tag, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) TagByID(ctx context.Context, id string) (*db.Tag, error) {
	ID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	res, err := db.GetItem(r.Db.Collection("firms"), ctx, ID)

	if err != nil {
		return nil, err
	}
	item := &db.Tag{}
	return item, res.Decode(item)
}

func (r *resinResolver) ID(ctx context.Context, obj *db.Resin) (string, error) {
	return query.ObjectID(&obj.ID)
}

func (r *tagResolver) ID(ctx context.Context, obj *db.Tag) (string, error) {
	return query.ObjectID(&obj.ID)
}

func (r *typeResolver) ID(ctx context.Context, obj *db.Type) (string, error) {
	return query.ObjectID(&obj.ID)
}

// Firm returns generated.FirmResolver implementation.
func (r *Resolver) Firm() generated.FirmResolver { return &firmResolver{r} }

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Printer returns generated.PrinterResolver implementation.
func (r *Resolver) Printer() generated.PrinterResolver { return &printerResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Resin returns generated.ResinResolver implementation.
func (r *Resolver) Resin() generated.ResinResolver { return &resinResolver{r} }

// Tag returns generated.TagResolver implementation.
func (r *Resolver) Tag() generated.TagResolver { return &tagResolver{r} }

// Type returns generated.TypeResolver implementation.
func (r *Resolver) Type() generated.TypeResolver { return &typeResolver{r} }

type firmResolver struct{ *Resolver }
type mutationResolver struct{ *Resolver }
type printerResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type resinResolver struct{ *Resolver }
type tagResolver struct{ *Resolver }
type typeResolver struct{ *Resolver }
