// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Passport Dependencies
var passport   = require('passport')
var session    = require('express-session')
var path       = require("path")


// Require Article Schema
var Memory = require("./models/Memory");
var User = require("./models/User");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

console.log('running server');
// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

// -------------------------------------------------





// MongoDB Configuration configuration (Change this URL to your own DB)
var dbUrl = "mongodb://localhost/memorybubbles";

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(dbUrl);
}

var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------


//Passport requirements
var authRoute = require('./Controllers/authentication.js')(app,passport);
//load passport strategies
   // require('./config/passport.js')(passport,db.Users);
var strategies = require('./assets/javascript/passport.js')(passport,db.Users);

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered

app.get("/api", function(req, res) {
    console.log("Get all api method.");
     // We will find all the records, sort it in descending order, then limit the records to 5
    Memory.find({}).sort([
        ["date", "descending"]
    ]).limit(5).exec(function(err, memories) {
        if (err) {
            console.log(err);
        } else {
            res.send(memories);
        }
    });
});

// This is the route we will send POST requests to save each search.
app.post("/api/save", function(req, res) {
    console.log("Inside Save memory method.");
    var memory = req.body.memory;
    console.log(`Memory to be saved: ${memory.data}`);

    var newMemory = new Memory(memory);
    newMemory.save(function(err, memory) {
        if (err) {
            console.log(err);
        } else {
            res.send("Saved memory");
        }
    });

});

// This is the route we will send POST requests to save each search.
app.delete("/api/:id", function(req, res) {
    console.log("Delete memory by id method");
    res.send("Delete memory by id method");
    //   var id = req.params.id ;
    //   console.log("Inside delete request api: " + id);
    //
    //    // Here we'll save the location based on the JSON input.
    //   // We'll use Date.now() to always get the current date time
    //  Article.find({_id :id}).remove().exec(function(err,article) {
    //      if (err) {
    //          console.log(err);
    //      } else {
    //          console.log(`Deleted the article`);
    //          res.send("Deleted Article");
    //      }
    //  });

});

// Post route to database for new user
app.post("/api/user/save", function(req, res) {
    var user = req.body.user
    console.log("Saving the new user");

    var newUser = new User(user);
    newUser.save(function(err, user) {
        if (err) {
            console.log(err);
        } else {
            // res.send("Saved the new user");
            console.log("success save user")
        }
    });

});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
    console.log("Express Server listening on PORT: " + PORT);
});