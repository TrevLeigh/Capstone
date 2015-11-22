angular.module('app').controller('myWorkoutCtrl',function($scope, myNotifier, $window, $http, myWorkoutFactory, myIdentity, $routeParams,$compile,$route ){
    
    $scope.identity = myIdentity;
    
    $scope.getData = function(){
        if($scope.category === "All"){
            $http.get('/api/exercises').success(function(response){
                $scope.e = response;
            });   
        }
        else if($scope.category === "Arms"){
            $http.get('/api/exercises/arms').success(function(response){
                $scope.e = response;
            });   
        }
        else if($scope.category === "Legs"){
            $http.get('/api/exercises/legs').success(function(response){
                $scope.e = response;
            });   
        }
        else if($scope.category === "Abs"){
            $http.get('/api/exercises/abs').success(function(response){
                $scope.e = response;
            });   
        }
        else if($scope.category === "Chest"){
            $http.get('/api/exercises/chest').success(function(response){
                $scope.e = response;
            });   
        }
        else if($scope.category === "Back"){
            $http.get('/api/exercises/back').success(function(response){
                $scope.e = response;
            });   
        }
        else if($scope.category === "Shoulders"){
            $http.get('/api/exercises/shoulders').success(function(response){
                $scope.e = response;
            });   
        }
        else if($scope.category === "Calves"){
            $http.get('/api/exercises/calves').success(function(response){
                $scope.e = response;
            });   
        }
    }
    
    
    $scope.create = function(){
            var newWorkoutData = {
                name: $scope.name,
                exercises: [{exercise:$scope.exercise,
                sets:$scope.sets,
                reps:[$scope.reps0,$scope.reps1,$scope.reps2,$scope.reps3,$scope.reps4,$scope.reps5,$scope.reps6,$scope.reps7,$scope.reps8,$scope.reps9]}],
                owner: myIdentity.currentUser.username
            };
        
        myWorkoutFactory.createWorkout(newWorkoutData).then(function(){
            myNotifier.notify('Workout Created!');
            $window.location.href="/api/workouts";
        }, function(reason){
            myNotifier.error(reason);
        });
        
    }
    
//    $scope.addExercise = function(){
//        
//        $http.put('api/workouts/' + $routeParams.id,{
//            exercises:[{
//            exercise: $scope.exercise,
//                       sets: $scope.sets,
//                       reps: [$scope.reps0,$scope.reps1,$scope.reps2,$scope.reps3,$scope.reps4,$scope.reps5,$scope.reps6,$scope.reps7,$scope.reps8,$scope.reps9]
//        }]
//        }).success(function(data){
//            myNotifier.notify('Exercise Added');
//            $window.location.href="/#/workouts";
//        });
//    }
    
    $scope.edit = function(){
        $http.put('/api/workouts/' + $routeParams.id,{
            name: $scope.name,
            exercises: [{exercise:$scope.exercise,
                        sets:$scope.sets,
                        reps:[$scope.reps0,$scope.reps1,$scope.reps2,$scope.reps3,$scope.reps4,$scope.reps5,$scope.reps6,$scope.reps7,$scope.reps8,$scope.reps9]}]
        }).success(function(data){
            myNotifier.notify('Workout Edited');
            $window.location.href="/#/workouts";
        });
    }
    
    $scope.delete = function(){
        $http.delete('/api/workouts/' + $routeParams.id).success(function(data){
            myNotifier.notify('Workout Deleted');
            $route.reload();
            $window.location.href="/#/workouts";
        });
    }
    
        
    
    $scope.addReps = function(){
    var number = document.getElementById("sets").value;
    
    var rep = document.getElementById("reps");
    
    while (rep.hasChildNodes()) {
                rep.removeChild(rep.lastChild);
            }
    for(i=0;i<number;i++){
        
        var input = document.createElement("input");
        
        input.name = "reps" + i;
        input.setAttribute("ng-model", "reps" + i);
        input.setAttribute("class", "form-control");
        input.setAttribute("min", 1);
        input.setAttribute("type","Number");
        input.required = true;
        rep.appendChild(input);
        
        rep.appendChild(document.createElement("br"));
        
        $compile(rep)($scope);
        
    }
}
    
    $scope.getWorkouts = function(){
        $http.get('/api/workouts/').success(function(response){
            $scope.data = response;
        });
    }
    
    $scope.getSingleWorkout = function(){
        $http.get('/api/workouts/' + $routeParams.id).success(function(response){
            $scope.item = response;
        });
    }
    
    $scope.getSingleWorkout();
    $scope.getWorkouts();
    
});