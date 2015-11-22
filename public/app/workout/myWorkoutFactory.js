angular.module('app').factory('myWorkoutFactory',function($http, myWorkout ,$q, $window, myNotifier){
    return{
        createWorkout: function(newWorkoutData){
            var newWorkout = new myWorkout(newWorkoutData);
            var dfd = $q.defer();
            
            newWorkout.$save().then(function(){
                dfd.resolve();
            },function(response){
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        }
    }
});