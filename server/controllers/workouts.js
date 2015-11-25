var Workout = require('mongoose').model('Workout');

exports.getWorkouts = function(req,res){
    Workout.find({}).exec(function(err,collection){
        res.send(collection);
    });
};

exports.getWorkoutsById = function(req,res){
    Workout.findOne({_id: req.params.id}).exec(function(err, collection){
        res.send(collection);
    });
};

exports.createWorkout = function(req,res,next){
  var workoutData = req.body;  
    
    Workout.create(workoutData, function(err, workout){
       if(err){
           res.status(400);
           return res.send({reason:err.toString()});
       }
        res.send(workout);
    });
    
};


exports.editWorkout = function(req,res){
    Workout.findOne({_id: req.params.id}).exec(function(err,workout){
            workout.name = req.body.name;
            for(var i =0; i < req.body.exercises.length; i++){
                workout.exercises[i].exercise = req.body.exercise;
                workout.exercises[i].sets = req.body.sets;
                for(var y =0; y < req.body.exercises[i].reps.length; y++){
                    workout.exercises[i].reps = req.body.reps[y];
                }
            }
        workout.save(function(err){
            if(!err){
                console.log("updated");
            }else{
                console.log(err);
            }
            res.send(workout);
        });
    });
};

exports.deleteWorkout = function(req,res){
    Workout.remove({_id: req.params.id}, function(err,workout){
        res.send(workout);
    });
};