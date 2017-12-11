import { angular2react } from 'angular2react';

import { jitInjector } from './jit-injector';

export const WrapperAngular = {
    template: `
<div class="section">
    <div class="container">
        <chart-wrap-angular data="2"></chart-wrap-angular>
    </div>
</div>
`
};

export let Wrapper = angular2react('wrapperAngular', WrapperAngular, jitInjector.$injector);
