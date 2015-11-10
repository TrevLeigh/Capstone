
var auth = require('./auth'),
    users = require('../controllers/users'),
    exercises = require('../controllers/exercises'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    fbUser = mongoose.model('FbUser'),
     Exercise = require('mongoose').model('Exercise');

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
    
    app.get('/api/exercises', exercises.getExercises);
    app.get('/api/exercises/arms', exercises.getArmsExercise);
    app.get('/api/exercises/legs', exercises.getLegsExercise);
    app.get('/api/exercises/abs', exercises.getAbsExercise);
    app.get('/api/exercises/chest', exercises.getChestExercise);
    app.get('/api/exercises/back', exercises.getBackExercise);
    app.get('/api/exercises/shoulders', exercises.getShouldersExercise);
    app.get('/api/exercises/calves', exercises.getCalvesExercise);
    app.get('/api/exercises/:id', exercises.getExerciseById);
    
    app.get('/exercises/:id', function(req,res){
        res.render('index');
       
    });
    
    
    app.post('/api/users', users.createUser);
    
    app.post('/api/exercises', exercises.createExercise);
    
    app.get('/exercise/create',function(req,res){
        res.render('createExercise');
    });
    
    app.get('/exercise',function(req,res){
        res.render('exercise');
    });
    
    app.get('/workout', function(req,res){
        res.render('workout',{
            bootstrappedUser: req.user
        });
    });
    app.get('/login', function(req,res){
        res.render('login',{
           bootstrappedUser: req.user 
        });
    });
    app.get('/home',function(req,res){
        res.render('home',{
           bootstrappedUser: req.user 
        });
    });
    
    app.get('/signup', function(req, res){
        res.render('register');
    });
    
    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/partials/*', function(req,res){
        res.render('../partials/' + req.params[0]);
    });
    
    app.post('/loginPost', auth.authenticate);
    
    app.post('/logout', function(req,res){
        req.logout();
        res.end();
    });
       
}