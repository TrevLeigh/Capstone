angular.module('app', ['ngRoute', 'ngResource', 'chart.js']);

angular.module('app').config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl:'/partials/landingPartial',controller:'myLoginCtrl'})
        .when('/home',{templateUrl:'/partials/homePartial',controller:'myRegimenCtrl'})
        .when('/login',{templateUrl:'/partials/loginPartial',controller:'myLoginCtrl'})
        .when('/signup',{templateUrl:'/partials/registerPartial',controller:'mySignupCtrl'})
        .when('/exercises',{templateUrl:'/partials/exercisesPartial',controller:'myExerciseCtrl'})
        .when('/exercises/create',{templateUrl:'/partials/createExercisePartial',controller:'myExerciseCtrl'})
        .when('/exercises/:id', { templateUrl:'/partials/singleExercise',controller: 'myExerciseCtrl'})
        .when('/exercises/:id/edit',{templateUrl:'/partials/editExercise',controller: 'myExerciseCtrl'})
        .when('/workouts',{templateUrl:'/partials/workoutsPartial',controller:'myWorkoutCtrl'})
        .when('/workouts/:id',{templateUrl:'/partials/singleWorkout', controller:'myWorkoutCtrl'})
        .when('/workouts/:id/edit',{templateUrl:'/partials/editWorkout',controller:'myWorkoutCtrl'})
        .when('/workouts/:id/addExercise',{templateUrl:'/partials/addExercise',controller:'myWorkoutCtrl'})
        .when('/workout/create',{templateUrl:'/partials/createWorkoutPartial',controller:'myWorkoutCtrl'})
        .when('/regimens',{templateUrl:'/partials/regimensPartial',controller:'myRegimenCtrl'})
        .when('/regimen/create',{templateUrl:'/partials/createRegimenPartial',controller:'myRegimenCtrl'})
        .when('/regimens/:id',{templateUrl:'/partials/singleRegimen',controller:'myRegimenCtrl'})
        .when('/regimens/:id/edit',{templateUrl:'/partials/editRegimen',controller:'myRegimenCtrl'});
    
});


