
import angular from 'angular';
import angularChart from 'angular-chart.js';
import { angular2react } from 'angular2react';

import React from 'react';
import { render } from 'react-dom';
import { react2angular } from 'react2angular';

import { ChartAngular } from './angular/chart';

const ChartWrap = ({ data }) =>
    <div className="row">
        <div className="col-lg-6 col-sm-12">
            <Chart data={ data * 2 } />
        </div>
    </div>;
const ChartWrapAngular = react2angular(ChartWrap, ['data']);

const WrapperAngular = {
    template: `
<div class="section">
    <div class="container">
        <chart-wrap-angular data="2"></chart-wrap-angular>
    </div>
</div>
`
};

// Expose components to Angular
let $injector;

angular
    .module('Demo', [angularChart])
    .component('wrapperAngular', WrapperAngular)
    .component('chartWrapAngular', ChartWrapAngular)
    .component('chartAngular', ChartAngular)
    .run(['$injector', _$injector => {
        $injector = _$injector;
    }]);

angular.bootstrap(document.createElement('div'), ['Demo']);

// Expose components to React
let Wrapper = angular2react('wrapperAngular', WrapperAngular, $injector);
let Chart = angular2react('chartAngular', ChartAngular, $injector);

render(<Wrapper />, document.getElementById('mainApp'));
