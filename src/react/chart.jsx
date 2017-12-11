import React from 'react';
import { react2angular } from 'react2angular';

import { Chart } from '../angular/chart';

export const ChartWrap = ({ data }) =>
    <div className="row">
        <div className="col-lg-6 col-sm-12">
            <Chart data={ data * 2 } />
        </div>
    </div>;

export const ChartWrapAngular = react2angular(ChartWrap, ['data']);
