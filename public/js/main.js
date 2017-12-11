/* global angular, console */

var app = angular.module('mainApp', [
    'ngRoute',
    'chart.js'
]);
var CHARTCONTROLLER = 'DoughnutController';
var PAGECONTROLLER = 'PageController';
var REMOTEURL = 'http://ergast.com/api/f1/current/driverStandings.json?limit=10';

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { templateUrl: 'partials/angular-chart.html', controller: CHARTCONTROLLER })
        .otherwise('/404', { templateUrl: 'partials/404.html', controller: PAGECONTROLLER });
}]);

app.controller(PAGECONTROLLER, function ($scope, $location) {
    console.info(PAGECONTROLLER + ' for ' + $location.$$url);
});

app.controller(CHARTCONTROLLER, function ($scope, $http) {
    function parseResponse (response) {
        var data = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        $scope.labels = data.map(function (item) {
            var driver = item.Driver;

            return driver.givenName + ' ' + driver.familyName +
                ' (' + item.Constructors[0].name + ')';
        });

        $scope.data = data.map(function (item) {
            return item.points;
        });

        $scope.options = {
            legend: {
                display: true,
                position: 'bottom'
            }
        };
    }

    $http.get(REMOTEURL).then(parseResponse);
});
