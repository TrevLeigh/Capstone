angular.module('app').factory('myRegimen',function($resource){
    var RegimenResource = $resource('/api/regimens/:id',{_id:"@id"});
    return RegimenResource;
});