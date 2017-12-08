/* global angular, console */

'use strict';

var app = angular.module('mainApp', [
    'ngRoute',
    'chart.js'
]);
var CHARTCONTROLLER = 'DoughnutController';
var PAGECONTROLLER = 'PageController';

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'partials/angular-only.html', controller: CHARTCONTROLLER })
        .when('/angular-react', { templateUrl: 'partials/angular-react.html', controller: PAGECONTROLLER })
        .when('/react-only', { templateUrl: 'partials/react-only.html', controller: PAGECONTROLLER })
        .otherwise('/404', { templateUrl: 'partials/404.html', controller: PAGECONTROLLER });
}]);

app.controller(PAGECONTROLLER, function($scope, $location) {
    console.info(PAGECONTROLLER + ' for ' + $location.$$url);
});

app.controller(CHARTCONTROLLER, function($scope, $http) {
    function then(response) {
        var data = response.data;

        $scope.labels = data.labels;
        $scope.data = data.data;
    }

    $http.get('/templates/data.json').then(then);
});
