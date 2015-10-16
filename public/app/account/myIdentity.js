angular.module('app').factory('myIdentity', function(){
    return{
        currentUser: undefined,
        isAuthenticated: function(){
            return !!this.currentUser;
        }
    }
});