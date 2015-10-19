angular.module('app').factory('myAuth', function($http, myIdentity, $q, myUser){
    return{
        authenticateUser: function(username, password){
                var dfd = $q.defer();
             $http.post('/loginPost',{username:username,password:password}).then(function(response){
            if(response.data.success){
                var user = new myUser();
                angular.extend(user, response.data.user);
                myIdentity.currentUser = user;
                dfd.resolve(true);
            }else{
                dfd.resolve(false);
            }
        });
            return dfd.promise;
            
        },
        
        createUser: function(newUserData){
            var newUser = new myUser(newUserData);
            var dfd = $q.defer();
            
            newUser.$save().then(function(){
                myIdentity.currentUser = newUser;
                dfd.resolve();
            }, function(response){
                dfd.reject(response.data.reason);
            });
            
            return dfd.promise;
        },
        logoutUser: function(){
            var dfd = $q.defer();
            $http.post('/logout',{logout:true}).then(function(){
                myIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        }
    }
});
