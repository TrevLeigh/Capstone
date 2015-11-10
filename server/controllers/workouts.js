var Workout = require('mongoose').model('workout');

exports.createWorkout = function(req,res,next){
    var workoutData = new Workout;
    workoutData.workoutname = "Pushups";
    workoutData.day = "Monday";
    workoutData.calendarDate = "10/26/2015";
    workoutData.owner = "Trevor Hawkins";
    
    Workout.create(workoutData);
    workoutData.save();
};