var authController = require('../Controllers/Passport_Controller.js');

module.exports = function(app,passport){



app.get('/signup', authController.signup);


app.get('/signin', authController.signin);

app.get('/logout', authController.logout);


app.post('/signup', passport.authenticate('local-signup',{ 

    successRedirect: '/',

    failureRedirect: '/'
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


