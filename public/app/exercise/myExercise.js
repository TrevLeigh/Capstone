angular.module('app').factory('myExercise',function($resource){
    var ExerciseResource = $resource('/api/exercises/:id',{_id: "@id"});
    
    return ExerciseResource;
});