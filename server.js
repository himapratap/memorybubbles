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
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// ***&&&***
app.use(cookieParser());
// ***&&&*** Express Session
app.use(session({secret: 'secret', saveUninitialized: true, resave: true}));
// ***&&&*** Passport init
app.use(passport.initialize());
app.use(passport.session());
// ***&&&*** Express Validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {param: formParam, msg: msg, value: value};
    }
}));

// ***&&&*** Connect Flash
app.use(flash());
// ***&&&*** Global Vars
app.use(function(req, res, next) {
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

db.once("openUri", function() {
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/api/:id", function(req, res) {
    console.log("Get all api method.");
    var id = req.params.id ;
    console.log(`Searching against the user id ${id}`);
    // We will find all the records, sort it in descending order, then limit the records to 5
    Memory.find({
        userId: id
    }).sort([
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
  console.log(memory);
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

// Post route to database for new user
app.post("/api/user/save", function(req, res) {
    var user = req.body.user
    console.log(user);
    console.log(user.firstname)
    console.log(user.lastname)
    console.log(user.email)
    console.log(user.password)
    console.log(user.password2)
    var newUser = new User({firstname: user.firstname, lastname: user.lastname, email: user.email, password: user.password});
    User.createUser(newUser, function(err, user) {
        if (err)
            throw err;
        console.log(user + "User is in!");
    });

});

app.post('/auth/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            res.status = 400;
            return next(err);
        }
        if (!user) {
            res.status = 403;
            return res.send('invalid');
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            res.status = 200;
            return res.send(user);
        });
    })(req, res, next);
});

// ***&&*** Passport Login Code
passport.use(new LocalStrategy({ // Our user will sign in using an email, rather than a "username"
    usernameField: "email",
    passReqToCallback: true // allows us to pass back the entire request to the callback

}, function(req, email, password, done) {
    console.log('Inside passport verfication');
    User.getUserByEmail(email, function(err, user) {
        console.log(user);
        if (err)
            throw err;
        if (!user) {
            return done(null, false, {message: 'Unknown User'});
        }

        User.comparePassword(password, user.password, function(err, isMatch) {
            if (err)
                throw err;
            if (isMatch) {
                console.log('match');
                return done(null, user);
            } else {
                return done(null, false, {message: 'Invalid password'});
            }
        });
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});
passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

// Listener
app.listen(PORT, function() {
    console.log("Express Server listening on PORT: " + PORT);
});