
var auth = require('./auth'),
    users = require('../controllers/users'),
    fbusers = require('../controllers/fbusers'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    fbUser = mongoose.model('FbUser');

module.exports = function(app){
    
    
    app.get('/auth/facebook', passport.authenticate('facebook',{scope:'email' }));
    
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/home',
            failureRedirect : '/'
        }));
    
    app.get('/auth/google', passport.authenticate('google',{scope: ['profile','email']}));
    
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/home',
            failureRedirect : '/'
        }));
    
    app.get('/api/users', users.getUsers);
    
    
    app.post('/api/users', users.createUser);
    
    app.get('/login', function(req,res){
        res.render('index',{
           bootstrappedUser: req.user 
        });
    });
    app.get('/home',function(req,res){
        res.render('index',{
           bootstrappedUser: req.user 
        });
    });
   
    
    app.get('/signup',function(req,res){
        res.render('index');
    });

    app.get('/partials/*', function(req,res){
        res.render('../../public/app/' + req.params[0]);
    });
    
     app.get('/', function(req, res){
        res.render('index');
    });
    
    app.post('/loginPost', auth.authenticate);
    
    app.post('/logout', function(req,res){
        req.logout();
        res.end();
    });
       
}