var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];


require('./server/config/express')(app,config);

require('./server/config/mongoose')(config);

var User = mongoose.model('User');

passport.use(new LocalStrategy(
    function(username, password,done){
        User.findOne({username:username}).exec(function(err,user){
            if(user && user.authenticate(password)){
                return done(null, user);
            }else{
                return done(null, false);
            }
        })
    }
));

passport.serializeUser(function(user,done){
    if(user){
        done(null, user._id);
    }
});

passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        done(err,user);
    });
});
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');