//added necessary extra variables
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var User = mongoose.model('User');

var ListingSchema = new Schema( {
    _id : ObjectId,
    userId: { type: Schema.ObjectId, ref: "User" },
    address: { type: String, required: true },
    description: { type: String, required: true },
    rooms: { type: Number, required: true },
    deposit: { type: Number, required: true },
});

var Listing = mongoose.model('Listing', ListingSchema);