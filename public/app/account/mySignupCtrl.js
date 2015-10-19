angular.module('app').controller('mySignupCtrl',function($scope, myUser, myNotifier, $location, myAuth){
    
    $scope.signup = function(){
        var newUserData = {
            email: $scope.email,
            username: $scope.username,
            password: $scope.password
        };
        
        myAuth.createUser(newUserData).then(function(){
            myNotifier.notify('User account created!');
            $location.path('/home');
        },function(reason){
            myNotifier.error(reason);
        });
    }
});