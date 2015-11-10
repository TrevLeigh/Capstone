angular.module('app').controller('myWorkoutCtrl',function($scope, myNotifier, $window, $http){
    
    $scope.getData = function(){
        if($scope.category === "All"){
            $http.get('/api/exercises').success(function(response){
                $scope.data = response;
            });   
        }
        else if($scope.category === "Arms"){
            $http.get('/api/exercises/arms').success(function(response){
                $scope.data = response;
            });   
        }
        else if($scope.category === "Legs"){
            $http.get('/api/exercises/legs').success(function(response){
                $scope.data = response;
            });   
        }
        else if($scope.category === "Abs"){
            $http.get('/api/exercises/abs').success(function(response){
                $scope.data = response;
            });   
        }
        else if($scope.category === "Chest"){
            $http.get('/api/exercises/chest').success(function(response){
                $scope.data = response;
            });   
        }
        else if($scope.category === "Back"){
            $http.get('/api/exercises/back').success(function(response){
                $scope.data = response;
            });   
        }
        else if($scope.category === "Shoulders"){
            $http.get('/api/exercises/shoulders').success(function(response){
                $scope.data = response;
            });   
        }
        else if($scope.category === "Calves"){
            $http.get('/api/exercises/calves').success(function(response){
                $scope.data = response;
            });   
        }
    }
    $scope.getData();
});