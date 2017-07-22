var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    
    id: {
        type: Number
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    last_login: { 
        type: Date, default: Date.now 
    }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
