angular.module('app').controller('myExerciseCtrl', function($scope,myNotifier, $window, myExercise, myExerciseFactory, $http, $resource, $routeParams){
   
    $scope.create = function(){
        var newExerciseData = {
            name: $scope.name,
            description: $scope.description,
            equipment: $scope.equipment,
            category: $scope.category
        };
        
        myExerciseFactory.createExercise(newExerciseData).then(function(){
            myNotifier.notify('Exercise Created!');
            $window.location.href="/exercise";
        }, function(reason){
            myNotifier.error(reason);
        });
        
    }
    
    $scope.getExercise = function(){
        $http.get('/api/exercises').success(function(response){
            $scope.data = response;
        }); 
    }
    
    
    $scope.getSingleExercise = function(){
        $http.get('/api/exercises/' + $routeParams.id).success(function(response){
            $scope.item = response;
        });
    }
    $scope.getSingleExercise($routeParams.id);
    $scope.getSingleExercise();
    $scope.getExercise();
    
});