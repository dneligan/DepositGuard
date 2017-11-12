//added necessary extra variables
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId

var UserSchema = new Schema( {
    _id : ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    userType: { type: String, required: true },
});

var User = mongoose.model('User', UserSchema);