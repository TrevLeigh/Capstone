angular.module('app').controller('myExerciseCtrl', function($scope,myNotifier, $window, myExercise, myExerciseFactory, $http, $resource, $routeParams,myIdentity,$route){
   $scope.identity = myIdentity;
    $scope.create = function(){
        var newExerciseData = {
            name: $scope.name,
            description: $scope.description,
            equipment: $scope.equipment,
            category: $scope.category,
            owner: myIdentity.currentUser.username
        };
        
        $scope.init = function(){
        if(!$scope.identity.isAuthenticated()){
            window.location.href="localhost:3030/#/login";
        }
    }
        
        myExerciseFactory.createExercise(newExerciseData).then(function(){
            myNotifier.notify('Exercise Created!');
            $window.location.href="/#/exercise";
        }, function(reason){
            myNotifier.error(reason);
        });
        
    }
    
    $scope.getExercise = function(){
        $http.get('/api/exercises').success(function(response){
            $scope.data = response;
        }); 
    }
    
    $scope.edit = function(){
        var exerciseData = {
            name: $scope.name,
            description: $scope.description,
            equipment: $scope.equipment
        };
        
        $http.put('/api/exercises/' + $routeParams.id,{
            name: exerciseData.name,
            description: exerciseData.description,
            equipment: exerciseData.equipment
        }). success(function(data){
            myNotifier.notify('Exercise Edited');
             $window.location.href="/#/exercises";
        });
    }
    
    $scope.delete = function(params){
        $http.delete('/api/exercises/' + params).success(function(data){
            myNotifier.notify('Exercise Deleted');
            $route.reload();
            $window.location.href="/#/exercises";
        });
    }
    $scope.getSingleExercise = function(){
        $http.get('/api/exercises/' + $routeParams.id).success(function(response){
            $scope.item = response;
        });
    }
    $scope.getSingleExercise();
    $scope.getExercise();
    
});