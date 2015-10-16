angular.module('app').factory('myAuth', function($http, myIdentity, $q){
    return{
        authenticateUser: function(username, password){
                var dfd = $q.defer();
             $http.post('/loginPost',{username:username,password:password}).then(function(response){
            if(response.data.success){
                myIdentity.currentUser = response.data.user;
                dfd.resolve(true);
            }else{
                dfd.resolve(false);
            }
        });
            return dfd.promise;
            
        }
    }
});