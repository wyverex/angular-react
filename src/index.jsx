
import angular from 'angular';
import angularChart from 'angular-chart.js';

import React from 'react';
import { render } from 'react-dom';

import { jitInjector } from './angular/jit-injector';

import { ChartAngular } from './angular/chart';
import { Wrapper, WrapperAngular } from './angular/wrapper';

import { ChartWrapAngular } from './react/chart.jsx';

// Expose components to Angular
angular
    .module('Demo', [angularChart])
    .component('wrapperAngular', WrapperAngular)
    .component('chartWrapAngular', ChartWrapAngular)
    .component('chartAngular', ChartAngular)
    .run(['$injector', jitInjection]);

angular.bootstrap(document.createElement('div'), ['Demo']);

function jitInjection(_$injector) {
    jitInjector.$injector = _$injector;
    reactBootstrap();
}

function reactBootstrap() {
    render(<Wrapper />, document.getElementById('mainApp'));
}
