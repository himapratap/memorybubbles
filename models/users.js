var mongoose = require("mongoose");
 // autoNumber = require('mongoose-auto-number');

 // var connection = mongoose.createConnection("mongodb://localhost/memorybubbles");
 
// autoNumber.init(connection);

var Schema = mongoose.Schema;
var UsersSchema = new Schema({
    
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

        username: {
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
        last_login: 
            { type: Date, default: Date.now }
        
});

// UsersSchema.plugin(autoNumber.plugin, 'Users');
var Users = mongoose.model("Users", UsersSchema);

module.exports = Users;







