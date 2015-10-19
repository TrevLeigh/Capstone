var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');

var configAuth = require('./auth');

module.exports = function(){

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
    
    
};