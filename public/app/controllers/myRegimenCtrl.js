angular.module('app').controller('myRegimenCtrl',function($scope,myNotifier,$http,$compile,$window,myRegimenFactory, myIdentity,$routeParams,$route){
    $scope.identity = myIdentity;
    $scope.getWorkouts = function(){
        $http.get('/api/workouts/').success(function(response){
            $scope.data = response;
        });
    }
    var num = 1;
    $scope.create = function(){
        var newRegimenData = {
            name: $scope.name,
            endDate: $scope.end,
            workouts: [$scope.workout,$scope.workouts0,$scope.workouts1,$scope.workouts2,$scope.workouts3,$scope.workouts4,$scope.workouts5,$scope.workouts6,$scope.workouts7,$scope.workouts8,$scope.workouts9,$scope.workouts10,$scope.workouts11,$scope.workouts12,$scope.workouts13,$scope.workouts14,$scope.workouts15,$scope.workouts16,$scope.workouts17,$scope.workouts18,$scope.workouts19,]
        };
        
        myRegimenFactory.createRegimen(newRegimenData).then(function(){
            myNotifier.notify('Regimen Created!');
            $window.location.href="/api/regimens";
        },function(reason){
            
            myNotifier.error(reason);
        });
    }
   $scope.editRegimenName = function(){
       var regimenData = {
           name:$scope.name
       };
       $http.put('/api/regimens/' + $routeParams.id,{
        name: regimenData.name
       }).success(function(data){
            myNotifier.notify('Regimen Name Changed');
           $window.location.href="/#/regimens";
       });
   }
    $scope.addWorkoutFields = function(){
        var workout = document.getElementById("workouts");
        
         while(workout.hasChildNodes()){
                workout.removeChild(workout.lastChild);
            }
            for(var i =0; i < num; i++){
                var input = document.createElement("select");
                input.name = "workouts" + i;
                input.setAttribute("ng-model","workouts" + i);
                input.setAttribute("class","form-control");
                input.setAttribute("id","options" + i);
                input.required = true;
                workout.appendChild(input);

                var newOption = document.createElement("option");
                newOption.setAttribute("ng-repeat","e in data")
                newOption.text = "{{e.name}}";
                input.appendChild(newOption); 
            
                $compile(workout)($scope);
            }
        num++;
    }
    
    
    $scope.getRegimens = function(){
        $http.get('/api/regimens/').success(function(response){
            $scope.d = response;
        });
    }
    
    $scope.getSingleRegimen = function(){
        $http.get('/api/regimens/' + $routeParams.id).success(function(response){
            $scope.item = response;
        });
    }

    $scope.delete = function(){
        $http.delete('/api/regimens/' + $routeParams.id).success(function(data){
            myNotifier.notify('Regimen Deleted');
            $route.reload();
            $window.location.href="/#/workouts";
        });
    }
    $scope.labels = ["Monday","Tuesday","Wedensday","Thursday","Friday","Saturday","Sunday"];
    $scope.series = ['Series A'];
    $scope.i =[[10,50,80,20,55,39,100]];

   
    $scope.getSingleRegimen();
    $scope.getRegimens();
    $scope.getWorkouts();
});