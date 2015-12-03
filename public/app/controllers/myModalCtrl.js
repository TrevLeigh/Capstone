angular.module('app').controller('myModalCtrl', function($scope,$uibModalInstance, inputModal){
    $scope.ok = function(){
        $uibModalInstance.close($scope.inputModal);
    };
});