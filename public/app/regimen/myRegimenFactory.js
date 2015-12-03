angular.module('app').factory('myRegimenFactory',function($http,myRegimen,$q,$window,myNotifier){
    var currentRegimen;
    if(!!$window.bootstrappedRegimenObject){
        angular.extend(currentRegimen, $window.bootstrappedRegimenObject);
    }
    return{
        createRegimen: function(newRegimenData){
            var newRegimen = new myRegimen(newRegimenData);
            var dfd = $q.defer();
            
            newRegimen.$save().then(function(){
                dfd.resolve();
            },function(response){
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        }
        
    }
});