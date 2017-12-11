const REMOTEURL = 'http://ergast.com/api/f1/current/driverStandings.json?limit=10';

export const ChartController = ($scope, $http) => {
    function parseResponse (response) {
        const data = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        $scope.labels = data.map(item => {
            const driver = item.Driver;

            return driver.givenName + ' ' + driver.familyName +
                ' (' + item.Constructors[0].name + ')';
        });

        $scope.data = data.map(item => item.points);

        $scope.options = {
            legend: {
                display: true,
                position: 'bottom'
            }
        };

        console.table($scope.labels);
    }

    $http.get(REMOTEURL).then(parseResponse);
};
