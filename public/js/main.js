/* global angular, console */

'use strict';

var app = angular.module('mainApp', [
    'ngRoute'
]);
var PAGECONTROLLER = 'pageController';

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'partials/index.html', controller: PAGECONTROLLER })
        .when('/morestuff', { templateUrl: 'partials/morestuff.html', controller: PAGECONTROLLER })
        .when('/stuff', { templateUrl: 'partials/stuff.html', controller: PAGECONTROLLER })
        .otherwise('/404', { templateUrl: 'partials/404.html', controller: PAGECONTROLLER });
}]);

app.controller(PAGECONTROLLER, function($scope, $location) {
    console.log('Controller for ' + $location.$$url);
});
