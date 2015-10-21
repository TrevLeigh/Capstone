var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User'),
    fbUser = mongoose.model('FbUser'),
    googleUser = mongoose.model('GoogleUser'),
    FacebookStrategy = require('passport-facebook').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var configAuth = require('./config');

module.exports = function(){
    
    passport.use(new LocalStrategy(
        function(username, password,done){
            User.findOne({username: username}).exec(function(err,user){
                if(user && user.authenticate(password)){
                    return done(null, user);
                }else{
                    return done(null, false);
                }
            });
        }
    ));
    
         passport.serializeUser(function(user,done){
        if(user){
            done(null, user);
        }
    });

    passport.deserializeUser(function(obj,done){
        done(null,obj);
    });
    
     passport.use(new FacebookStrategy({
            'clientID' : configAuth.facebookAuth.clientID,
            'clientSecret' : configAuth.facebookAuth.clientSecret,
            'callbackURL' : configAuth.facebookAuth.callbackURL,
            'profileFields':['id','email','name', 'photos']
        },
        function(token, refreshToken, profile, done) {
            process.nextTick(function(){
                fbUser.findOne({'id': profile.id}, function(err,user){
                    if(err)
                        return done(err);
                    
                    if(user){
                        return done(null, user);
                    }else{
                        var newUser = new fbUser();
                        
                        newUser.id = profile.id;
                        newUser.token = token;
                        newUser.username = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.email = profile.emails[0].value;
                        newUser.image = profile.photos[0].value;
                        
                        newUser.save(function(err){
                            if(err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
    
     passport.use(new GoogleStrategy({
            'clientID' : configAuth.googleAuth.clientID,
            'clientSecret' : configAuth.googleAuth.clientSecret,
            'callbackURL' : configAuth.googleAuth.callbackURL,
            'profileFields':['id','email','name', 'photos']
        },
        function(token, refreshToken, profile, done) {
            process.nextTick(function(){
                 googleUser.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    var newUser= new googleUser();

                    // set all of the relevant information
                    newUser.id= profile.id;
                    newUser.token = token;
                    newUser.username  = profile.displayName;
                    newUser.email = profile.emails[0].value; // pull the first email
                    newUser.image = profile.photos[0].value;

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
        }));
    
    
};