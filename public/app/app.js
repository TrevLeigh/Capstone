angular.module('app', ['ngRoute', 'ngResource']);

angular.module('app').config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl:'/partials/landingPartial',controller:'myMainCtrl'})
        .when('/exercises/:id', { templateUrl:'/partials/singleExercise',controller: 'myExerciseCtrl'});
    
    
});


