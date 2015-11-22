var Exercise = require('mongoose').model('Exercise');

exports.getExerciseById = function(req,res){
    Exercise.findOne({_id: req.params.id}).exec(function(err, collection){
        res.send(collection);
    });
};

exports.editExercise = function(req,res){
    Exercise.findOne({_id: req.params.id},function(err,exercise){
        exercise.name = req.body.name;
        exercise.description = req.body.description;
        exercise.equipment = req.body.equipment;
        
        exercise.save(function(err){
            if(!err){
                console.log("updated");
            }else{
                console.log(err);
            }
            res.send(exercise);
        });
    });
};

exports.deleteExercise = function(req,res){
    Exercise.remove({_id: req.params.id},function(err,exercise){
        res.send(exercise);
    });
};

exports.getExercises = function(req,res){
    Exercise.find({}).exec(function(err,collection){
        res.send(collection);
    });
    
};

exports.getArmsExercise = function(req,res){
    Exercise.find({category: "Arms"}).exec(function(err,collection){
        res.send(collection);
    });
    
};

exports.getLegsExercise = function(req,res){
    Exercise.find({category: "Legs"}).exec(function(err,collection){
        res.send(collection);
    });
    
};

exports.getAbsExercise = function(req,res){
    Exercise.find({category: "Abs"}).exec(function(err,collection){
        res.send(collection);
    });
};

exports.getChestExercise = function(req,res){
    Exercise.find({category: "Chest"}).exec(function(err,collection){
        res.send(collection);
    });
};

exports.getBackExercise = function(req,res){
    Exercise.find({category: "Back"}).exec(function(err,collection){
        res.send(collection);
    });
};

exports.getShouldersExercise = function(req,res){
    Exercise.find({category: "Shoulders"}).exec(function(err,collection){
        res.send(collection);
    });
};

exports.getCalvesExercise = function(req,res){
    Exercise.find({category: "Calves"}).exec(function(err,collection){
        res.send(collection);
    });
};

exports.createExercise = function(req,res,next){
  var exerciseData = req.body;  
    
    Exercise.create(exerciseData, function(err, exercise){
       if(err){
           res.status(400);
           return res.send({reason:err.toString()});
       }
        res.send(exercise);
    });
    
};

exports.getAllExercises = function(req,res){
    var exerciseName;
    Exercise.findOne().exec(function(err,collection){
        res.send(collection);
    });
};