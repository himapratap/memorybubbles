<<<<<<< HEAD
var authController = require('../controllers/Passport_Controller.js');
=======
var authController = require('../Controllers/Passport_Controller.js');
>>>>>>> 42a153b23599ea0b58c96b077c095e6c79fa1224

module.exports = function(app,passport){



app.get('/signup', authController.signup);


app.get('/signin', authController.signin);

app.get('/logout', authController.logout);


app.post('/signup', passport.authenticate('local-signup',{ 

<<<<<<< HEAD
    successRedirect: '/budgets',

    failureRedirect: '/signup'
=======
    successRedirect: '/',

    failureRedirect: '/'
>>>>>>> 42a153b23599ea0b58c96b077c095e6c79fa1224
}));


 
app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate('local-signin',{ 

    successRedirect: '/budgets',

    failureRedirect: '/signin'
}));

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}
}


