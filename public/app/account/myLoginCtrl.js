angular.module('app').controller('myLoginCtrl', function($scope, $http, myIdentity, myAuth,$location){
    $scope.identity = myIdentity;
    $scope.signin = function(username,password){
    myAuth.authenticateUser(username,password).then(function(success){
            if(success){
                $location.path('/home');
            }
            else{
                console.log('Username/Password is wrong!');
            }
        });
    }
});