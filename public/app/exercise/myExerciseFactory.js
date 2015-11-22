angular.module('app').factory('myExerciseFactory',function($http, myExercise ,$q, $window, myNotifier){
    return{
        createExercise: function(newExerciseData){
            var newExercise = new myExercise(newExerciseData);
            var dfd = $q.defer();
            
            newExercise.$save().then(function(){
                dfd.resolve();
            },function(response){
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        }
        
        
    }
});