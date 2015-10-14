angular.module('app').controller('myLoginCtrl', function($scope, $http){
    $scope.signin = function(username,password){
        $http.post('/loginPost',{username:username,password:password}).then(function(response){
            if(response.data.success){
                console.log('logged in!');
            }else{
                console.log('failed to log in!');
            }
        })
    }
});