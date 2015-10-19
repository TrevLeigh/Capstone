angular.module('app').factory('myIdentity', function($window, myUser){
    var currentUser;
    if(!!$window.bootstrappedUserObject){
        currentUser = new myUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return{
        currentUser: currentUser,
        isAuthenticated: function(){
            return !!this.currentUser;
        }
    }
});