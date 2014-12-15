angular.module('userRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route to list all users
        .when('/users', {
            templateUrl : 'views/pages/users/list.html',
            controller: 'userCtrl'
        })

        // route for the new user page
        .when('/users/new', {
            templateUrl : 'views/pages/users/new.html',
            controller: 'userCtrl'
        });

    // turn on html5Mode to clean up the URL (remove the #)
    $locationProvider.html5Mode(true);
});