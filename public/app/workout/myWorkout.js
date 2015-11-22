angular.module('app').factory('myWorkout',function($resource){
    var WorkoutResource = $resource('/api/workouts/:id',{_id: "@id"});
    
    return WorkoutResource;
});