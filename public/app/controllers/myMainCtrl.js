angular.module('app').controller('myMainCtrl', function($scope,myIdentity){
    $scope.identity = myIdentity;
    $scope.myVar = "Hello Angular";
});