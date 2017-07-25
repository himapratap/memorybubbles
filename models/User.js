var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
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
        required: true,
        index:true
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

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByEmail = function(email, callback){
    var query = {email: email};
    User.findOne(query, callback);
    console.log(email, callback);
    console.log("did not find");
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}
