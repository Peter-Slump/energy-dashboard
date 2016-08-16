import jQuery from 'jquery';
import React from 'react';
import FlotChart from './FlotChart';

var ChartWrapper = React.createClass({
    render: function() {
        const {report, powerMeter} = this.props;
        let plotData = [];
        let start, end = new Date();
        let stepSize = 'hour';
        Object.keys(report).map(function(powerMeterId){
            let currentPowerMeter = powerMeter.powerMetersById[powerMeterId];

            if(!currentPowerMeter.isSelected) {
                return;
            }

            plotData.push({
                data: report[powerMeterId].items.map(function(item){
                    return [new Date(item.datetime), parseFloat(item.value_increment)]
                }),
                color: currentPowerMeter.color,
                shadowSize: 0,
                label: currentPowerMeter.data.name,
                // stack: true,
                lines: {
                    lineWidth: 2,
                    show: true,
                    fill: true
                }
            });
            start = report[powerMeterId].start;
            end = report[powerMeterId].end;
            stepSize = report[powerMeterId].stepSize;
        });
        return (
            <FlotChart style={{height: 250}} start={start} end={end} stepSize={stepSize} className="row-bottom-spacing" plotData={plotData} />
        );
    }
});

export default ChartWrapper;
