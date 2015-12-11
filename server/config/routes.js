var auth = require('./auth'),
    users = require('../controllers/users'),
    exercises = require('../controllers/exercises'),
    workouts = require('../controllers/workouts'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    regimens = require('../controllers/regimens'),
    fbUser = mongoose.model('FbUser'),
    Exercise = require('mongoose').model('Exercise');

module.exports = function(app){
    
    
    app.get('/auth/facebook', passport.authenticate('facebook',{scope:'email' }));
    
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/#/home',
            failureRedirect : '/#/login'
        }));
    
    app.get('/auth/google', passport.authenticate('google',{scope: ['profile','email']}));
    
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/#/home',
            failureRedirect : '/#/login'
        }));
    
    app.get('/api/users', users.getUsers);
    app.get('/api/users/:id', users.getUsersById);
    app.put('/api/users/:id', users.editUser);
    app.put('/api/users/:id/add',users.addData);
    app.get('/api/exercises', exercises.getExercises);
    
    
    app.get('/api/exercises/arms', exercises.getArmsExercise);
    app.get('/api/exercises/legs', exercises.getLegsExercise);
    app.get('/api/exercises/abs', exercises.getAbsExercise);
    app.get('/api/exercises/chest', exercises.getChestExercise);
    app.get('/api/exercises/back', exercises.getBackExercise);
    app.get('/api/exercises/shoulders', exercises.getShouldersExercise);
    app.get('/api/exercises/calves', exercises.getCalvesExercise);
    app.get('/api/exercises/:id', exercises.getExerciseById);
    
    app.post('/api/exercises', exercises.createExercise);
    app.put('/api/exercises/:id',exercises.editExercise);
    app.delete('/api/exercises/:id',exercises.deleteExercise);
    
    app.get('/api/workouts',workouts.getWorkouts);
    app.get('/api/workouts/:id', workouts.getWorkoutsById);
    
    app.put('/api/workouts/:id', workouts.shareWorkout);
    app.delete('/api/workouts/:id',workouts.deleteWorkout);
    app.post('/api/workouts',workouts.createWorkout);
    
    app.get('/api/regimens',regimens.getRegimens);
    app.get('/api/regimens/:id',regimens.getRegimensById);
    
    app.put('/api/regimens/:id', regimens.editRegimen);
    app.put('/api/regimens/:id/add',regimens.addData);
    app.delete('/api/regimens/:id',regimens.deleteRegimen);
    app.post('/api/regimens',regimens.createRegimens);
    
    
    app.post('/api/users', users.createUser);
    

    app.get('/partials/*', function(req,res){
        res.render('../partials/' + req.params[0]);
    });
    app.get('*', function(req,res){
        res.render('index',{
            bootstrappedUser: req.user
        });
    });
    
    app.post('/loginPost', auth.authenticate);
    
    app.post('/logout', function(req,res){
        req.logout();
        res.end();
    });
       
}