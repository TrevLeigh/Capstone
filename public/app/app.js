angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({
        enabled: true, 
        requireBase: false
    });
    $routeProvider
        .when('/', {templateUrl: 'partials/main/main', controller: 'myMainCtrl'})
        .when('/login',{templateUrl:'partials/account/loginPartial',controller:'myLoginCtrl'})
        .when('/home',{templateUrl:'partials/main/homePartial',controller: 'myLoginCtrl'})
        .when('/signup',{templateUrl:'partials/account/signup', controller: 'mySignupCtrl'});
});


