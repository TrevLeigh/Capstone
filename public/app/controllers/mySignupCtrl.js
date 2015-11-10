angular.module('app').controller('mySignupCtrl',function($scope, myUser, myNotifier, $window, myAuth){
    
    $scope.signup = function(){
        var newUserData = {
            email: $scope.email,
            username: $scope.username,
            password: $scope.password
        };
        
        myAuth.createUser(newUserData).then(function(){
            $window.location.href='/home';
        },function(reason){
            myNotifier.error(reason);
        });
    }
});