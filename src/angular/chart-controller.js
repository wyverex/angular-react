var REMOTEURL = 'http://ergast.com/api/f1/current/driverStandings.json?limit=10';

function labels(data) {
    return data.map(function (item) {
        var driver = item.Driver;

        return driver.givenName + ' ' + driver.familyName +
            ' (' + item.Constructors[0].name + ')';
    });
}

function points(data) {
    return data.map(function (item) {
        return item.points;
    });
}

function ChartController($scope, $http) {
    function parseResponse(response) {
        var data = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        $scope.labels = labels(data);
        $scope.data = points(data);
        $scope.options = {
            legend: {
                display: true,
                position: 'bottom'
            }
        };

        // console.table($scope.labels);
    }

    $http.get(REMOTEURL).then(parseResponse);
}

module.exports = ChartController;
