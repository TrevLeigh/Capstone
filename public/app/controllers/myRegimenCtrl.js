angular.module('app').controller('myRegimenCtrl',function($scope,myNotifier,$http,$compile,$window,myRegimenFactory, myIdentity,$routeParams,$route,$uibModal){
    $scope.identity = myIdentity;
     $scope.labels = ["Monday","Tuesday","Wedensday","Thursday","Friday","Saturday","Sunday"];
    $scope.series = ['Projected Data', 'Weekly Data'];
    $scope.myValues = [];
    $scope.data = [];
    
    $scope.getWorkouts = function(){
        $http.get('/api/workouts/').success(function(response){
            $scope.data = response;
        });
    }
    

    $scope.create = function(){
        var newRegimenData = {
            name: $scope.name,
            endDate: [$scope.mondayTime,$scope.tuesdayTime,$scope.wedensdayTime,$scope.thursdayTime,$scope.fridayTime,$scope.saturdayTime,$scope.sundayTime],
            workouts: [$scope.mondayWorkout,$scope.tuesdayWorkout,$scope.wedensdayWorkout,$scope.thursdayWorkout,$scope.friWorkout,$scope.saturdayWorkout,$scope.sundayWorkout],
            owner: myIdentity.currentUser.username
        };
        
        myRegimenFactory.createRegimen(newRegimenData).then(function(){
            myNotifier.notify('Regimen Created!');
            
            $window.location.href="/#/regimens";
        },function(reason){
            
            myNotifier.error(reason);
        });
    }
    
    
    $scope.addMonWorkoutFields = function(){
         $http.get('/api/regimens/' + myIdentity.currentUser.regimen).success(function(response){
            $http.get('/api/workouts/' + response.workouts[0]).success(function(data){
                var number = data.exercises[0].sets;
                var modalInput = document.getElementById("modal");
                for(i=0;i<number;i++){
                    var input = document.createElement("input");
                    input.setAttribute("ng-model", "modal" +i);
                    input.setAttribute("min",1);
                    input.setAttribute("class", "form-control");
                    input.setAttribute("type","Number");
                    
                    modalInput.appendChild(input);
                    
                    modalInput.appendChild(document.createElement("br"));
                    
                    $compile(modalInput)($scope);
                }
                
            });
        });
    }
    
    
    $scope.addTuesWorkoutFields = function(){
         $http.get('/api/regimens/' + myIdentity.currentUser.regimen).success(function(response){
            $http.get('/api/workouts/' + response.workouts[1]).success(function(data){
                var number = data.exercises[0].sets;
                var modalInput = document.getElementById("modal");
                for(i=0;i<number;i++){
                    var input = document.createElement("input");
                    input.setAttribute("ng-model", "input" +i);
                    input.setAttribute("min",1);
                    input.setAttribute("class", "form-control");
                    input.setAttribute("max",data.exercises[0].reps[i]);
                    input.setAttribute("type","Number");
                    
                    modalInput.appendChild(input);
                    
                    modalInput.appendChild(document.createElement("br"));
                    
                    $compile(modalInput)($scope);
                }
                
            });
        });
    }
    
    $scope.addWedWorkoutFields = function(){
         $http.get('/api/regimens/' + myIdentity.currentUser.regimen).success(function(response){
            $http.get('/api/workouts/' + response.workouts[2]).success(function(data){
                var number = data.exercises[0].sets;
                var modalInput = document.getElementById("modal");
                for(i=0;i<number;i++){
                    var input = document.createElement("input");
                    input.setAttribute("ng-model", "input" +i);
                    input.setAttribute("min",1);
                    input.setAttribute("class", "form-control");
                    input.setAttribute("max",data.exercises[0].reps[i]);
                    input.setAttribute("type","Number");
                    
                    modalInput.appendChild(input);
                    
                    modalInput.appendChild(document.createElement("br"));
                    
                    $compile(modalInput)($scope);
                }
                
            });
        });
    }
    
    $scope.addThurWorkoutFields = function(){
         $http.get('/api/regimens/' + myIdentity.currentUser.regimen).success(function(response){
            $http.get('/api/workouts/' + response.workouts[3]).success(function(data){
                var number = data.exercises[0].sets;
                var modalInput = document.getElementById("modal");
                for(i=0;i<number;i++){
                    var input = document.createElement("input");
                    input.setAttribute("ng-model", "input" +i);
                    input.setAttribute("min",1);
                    input.setAttribute("class", "form-control");
                    input.setAttribute("max",data.exercises[0].reps[i]);
                    input.setAttribute("type","Number");
                    
                    modalInput.appendChild(input);
                    
                    modalInput.appendChild(document.createElement("br"));
                    
                    $compile(modalInput)($scope);
                }
                
            });
        });
    }
    
    $scope.addFriWorkoutFields = function(){
         $http.get('/api/regimens/' + myIdentity.currentUser.regimen).success(function(response){
            $http.get('/api/workouts/' + response.workouts[4]).success(function(data){
                var number = data.exercises[0].sets;
                var modalInput = document.getElementById("modal");
                for(i=0;i<number;i++){
                    var input = document.createElement("input");
                    input.setAttribute("ng-model", "input" +i);
                    input.setAttribute("min",1);
                    input.setAttribute("class", "form-control");
                    input.setAttribute("max",data.exercises[0].reps[i]);
                    input.setAttribute("type","Number");
                    
                    modalInput.appendChild(input);
                    
                    modalInput.appendChild(document.createElement("br"));
                    
                    $compile(modalInput)($scope);
                }
                
            });
        });
    }
    
    $scope.addSatWorkoutFields = function(){
         $http.get('/api/regimens/' + myIdentity.currentUser.regimen).success(function(response){
            $http.get('/api/workouts/' + response.workouts[5]).success(function(data){
                var number = data.exercises[0].sets;
                var modalInput = document.getElementById("modal");
                for(i=0;i<number;i++){
                    var input = document.createElement("input");
                    input.setAttribute("ng-model", "input" +i);
                    input.setAttribute("min",1);
                    input.setAttribute("class", "form-control");
                    input.setAttribute("max",data.exercises[0].reps[i]);
                    input.setAttribute("type","Number");
                    
                    modalInput.appendChild(input);
                    
                    modalInput.appendChild(document.createElement("br"));
                    
                    $compile(modalInput)($scope);
                }
                
            });
        });
    }
    
    $scope.addSunWorkoutFields = function(){
         $http.get('/api/regimens/' + myIdentity.currentUser.regimen).success(function(response){
            $http.get('/api/workouts/' + response.workouts[6]).success(function(data){
                var number = data.exercises[0].sets;
                var modalInput = document.getElementById("modal");
                for(i=0;i<number;i++){
                    var input = document.createElement("input");
                    input.setAttribute("ng-model", "input" +i);
                    input.setAttribute("min",1);
                    input.setAttribute("class", "form-control");
                    input.setAttribute("max",data.exercises[0].reps[i]);
                    input.setAttribute("type","Number");
                    
                    modalInput.appendChild(input);
                    
                    modalInput.appendChild(document.createElement("br"));
                    
                    $compile(modalInput)($scope);
                }
                
            });
        });
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
    $scope.set = function(){
        $http.get('/api/regimens/' + $routeParams.id).success(function(response){
            
            $http.put('/api/users/'+myIdentity.currentUser._id,{
                regimen: response
                
            }).success(function(data){
                myNotifier.notify('Regimen Set');
                $scope.x = response;
                
                
            });
        });
    }
    $scope.getRegimensFromUser = function(){
        $http.get('/api/regimens/' + myIdentity.currentUser.regimen).success(function(response){
            $scope.x = response;
        });
    }
    $scope.mondayRegimen = function(){
        $http.get('/api/users/'+myIdentity.currentUser._id).success(function(user){
            $http.get('/api/regimens/' + user.regimen).success(function(response){
                $http.get('/api/workouts/' + response.workouts[0]).success(function(data){
                    $scope.mon = data;
                    $scope.myValues.splice(0,0,[data.exercises[0].reps[0]+data.exercises[0].reps[1]+data.exercises[0].reps[2]+data.exercises[0].reps[3]+data.exercises[0].reps[4]+data.exercises[0].reps[5]+data.exercises[0].reps[6]+data.exercises[0].reps[7]+data.exercises[0].reps[8]+data.exercises[0].reps[9]]);
                
                });
            });
        });
    }
    $scope.tuesdayRegimen = function(){
        $http.get('/api/users/'+myIdentity.currentUser._id).success(function(user){
            $http.get('/api/regimens/' + user.regimen).success(function(response){
                $http.get('/api/workouts/' + response.workouts[1]).success(function(data){
                    $scope.tues = data;
                    $scope.myValues.splice(1,0,[data.exercises[0].reps[0]+data.exercises[0].reps[1]+data.exercises[0].reps[2]+data.exercises[0].reps[3]+data.exercises[0].reps[4]+data.exercises[0].reps[5]+data.exercises[0].reps[6]+data.exercises[0].reps[7]+data.exercises[0].reps[8]+data.exercises[0].reps[9]]);
                });
            });
        });
    }
    $scope.wedensdayRegimen = function(){
        $http.get('/api/users/'+myIdentity.currentUser._id).success(function(user){
            $http.get('/api/regimens/' + user.regimen).success(function(response){
                $http.get('/api/workouts/' + response.workouts[2]).success(function(data){
                    $scope.wed = data;
                 $scope.myValues.splice(2,0,[data.exercises[0].reps[0]+data.exercises[0].reps[1]+data.exercises[0].reps[2]+data.exercises[0].reps[3]+data.exercises[0].reps[4]+data.exercises[0].reps[5]+data.exercises[0].reps[6]+data.exercises[0].reps[7]+data.exercises[0].reps[8]+data.exercises[0].reps[9]]);
                });
            });
        });
    }
    $scope.thursdayRegimen = function(){
        $http.get('/api/users/'+myIdentity.currentUser._id).success(function(user){
            $http.get('/api/regimens/' + user.regimen).success(function(response){
                $http.get('/api/workouts/' + response.workouts[3]).success(function(data){
                    $scope.thur = data;
                    $scope.myValues.splice(3,0,[data.exercises[0].reps[0]+data.exercises[0].reps[1]+data.exercises[0].reps[2]+data.exercises[0].reps[3]+data.exercises[0].reps[4]+data.exercises[0].reps[5]+data.exercises[0].reps[6]+data.exercises[0].reps[7]+data.exercises[0].reps[8]+data.exercises[0].reps[9]]);
                });
            });
        });
    }
    $scope.fridayRegimen = function(){
        $http.get('/api/users/'+myIdentity.currentUser._id).success(function(user){
            $http.get('/api/regimens/' + user.regimen).success(function(response){
                $http.get('/api/workouts/' + response.workouts[4]).success(function(data){
                    $scope.friday = data;                
                    $scope.myValues.splice(4,0,[data.exercises[0].reps[0]+data.exercises[0].reps[1]+data.exercises[0].reps[2]+data.exercises[0].reps[3]+data.exercises[0].reps[4]+data.exercises[0].reps[5]+data.exercises[0].reps[6]+data.exercises[0].reps[7]+data.exercises[0].reps[8]+data.exercises[0].reps[9]]);
                });
            });
        });
    }
    $scope.saturdayRegimen = function(){
        $http.get('/api/users/'+myIdentity.currentUser._id).success(function(user){
            $http.get('/api/regimens/' + user.regimen).success(function(response){
                $http.get('/api/workouts/' + response.workouts[5]).success(function(data){
                    $scope.sat = data;
                    $scope.myValues.splice(5,0,[data.exercises[0].reps[0]+data.exercises[0].reps[1]+data.exercises[0].reps[2]+data.exercises[0].reps[3]+data.exercises[0].reps[4]+data.exercises[0].reps[5]+data.exercises[0].reps[6]+data.exercises[0].reps[7]+data.exercises[0].reps[8]+data.exercises[0].reps[9]]);
                });
            });
        });
    }
    $scope.sundayRegimen = function(){
        $http.get('/api/users/'+myIdentity.currentUser._id).success(function(user){
            $http.get('/api/regimens/' + user.regimen).success(function(response){
                $http.get('/api/workouts/' + response.workouts[6]).success(function(data){
                    $scope.sun = data;
                    $scope.myValues.splice(6,0,[data.exercises[0].reps[0]+data.exercises[0].reps[1]+data.exercises[0].reps[2]+data.exercises[0].reps[3]+data.exercises[0].reps[4]+data.exercises[0].reps[5]+data.exercises[0].reps[6]+data.exercises[0].reps[7]+data.exercises[0].reps[8]+data.exercises[0].reps[9]]);
                });
            });
        });
    }
    
    $scope.enterData = function(){     
       $http.get('/api/users/'+myIdentity.currentUser._id).success(function(user){
            $http.put('/api/regimens/' + user.regimen+'/add',{
                data: $scope.weeklyData
            }).success(function(data){
                myNotifier.notify('Data added');
            });
        });
    }
    
    $scope.chartData = function(){
        $http.put('/api/users/' + myIdentity.currentUser._id+'/add').success(function(response){
            $scope.i.push(response.data);
        });
    }

    $scope.getCurrentDate = function(){
        $scope.date = new Date();
        
    }
    
    $scope.mytime = new Date();
    
    $scope.hstep = 1;
    
    $scope.mstep = 1;
    
    $scope.getCurrentDate();
    $scope.getSingleRegimen();
    $scope.getRegimens();
    $scope.getWorkouts();
    $scope.getRegimensFromUser();
    $scope.mondayRegimen();
    $scope.tuesdayRegimen();
    $scope.wedensdayRegimen();
    $scope.thursdayRegimen();
    $scope.fridayRegimen();
    $scope.saturdayRegimen();
    $scope.sundayRegimen();
    $scope.i =[$scope.myValues];
    
});