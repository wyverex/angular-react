var angular2react = require('angular2react').angular2react;

var ChartController = require('./chart-controller');
var jitInjector = require('./jit-injector').jitInjector;

var ChartAngular = {
    bindings: {
        data: '<'
    },
    controller: ChartController,
    templateUrl: './chart.html'
};

module.exports = {
    Chart: angular2react('chartAngular', ChartAngular, jitInjector.$injector),
    ChartAngular: ChartAngular
};
