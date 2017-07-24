// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// ***&&&*** Passport video dependencies
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Require Models
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


// ***&&&*** 
app.use(cookieParser());
// ***&&&*** Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
// ***&&&*** Passport init
app.use(passport.initialize());
app.use(passport.session());
// ***&&&*** Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// ***&&&*** Connect Flash
app.use(flash());
// ***&&&*** Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



// -------------------------------------------------

// MongoDB Configuration configuration
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
    ]).limit(100).exec(function(err, memories) {
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
    console.log(user);
    console.log(user.firstname)
    console.log(user.lastname)
    console.log(user.email)
    console.log(user.password)
    console.log(user.password2)

    var newUser = new User({
            firstname: user.firstname,
            lastname: user.lastname,
            email:user.email,
            password: user.password
        });
    User.createUser(newUser, function(err, user){
            if(err) throw err;
            console.log(user + "User is in!");
        });

});

// ***&&*** Passport Login Code
passport.use(new LocalStrategy(
  function(email, password, done) {
    email = login.email
   User.getUserByEmail(email, function(err, user){
    if(err) throw err;
    if(!user){
        return done(null, false, {message: 'Unknown User'});
    }

    User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
            return done(null, user);
        } else {
            return done(null, false, {message: 'Invalid password'});
        }
    });
   });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// Login
app.post("/api/login", passport.authenticate('local', {successRedirect:'/', failureRedirect:'/',failureFlash: true}),
  function(req, res) {
    res.redirect('/');
  });


// -------------------------------------------------

// Listener
app.listen(PORT, function() {
    console.log("Express Server listening on PORT: " + PORT);
});
