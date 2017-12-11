var REMOTEURL = 'http://ergast.com/api/f1/current/driverStandings.json?limit=10';

function ChartController($scope, $http) {
    function parseResponse(response) {
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

        // console.table($scope.labels);
    }

    $http.get(REMOTEURL).then(parseResponse);
}

module.exports = ChartController;
