import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart({ dataPoints, max }) {
    return (
        <div className="chart">
            {dataPoints.map(dp => <ChartBar value={dp.value} maxValue={max} label={dp.label} key={dp.label} />)}
        </div>
    );
}

export default Chart;
