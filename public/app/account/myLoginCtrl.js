angular.module('app').controller('myLoginCtrl', function($scope, $http, myNotifier,myIdentity, myAuth,$location){
    $scope.identity = myIdentity;
    $scope.signin = function(username,password){
        console.log(name);
        console.log(password);
    myAuth.authenticateUser(username,password).then(function(success){
            if(success){
               myNotifier.notify('You have successfully signed in!');
            }
            else{
                myNotifier.error('Username/Password is wrong!');
            }
        });
    }
    
    $scope.signout = function(){
        myAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            myNotifier.notify('you have successfully signed out!');
            $location.path('/');
        });
    }
    
});