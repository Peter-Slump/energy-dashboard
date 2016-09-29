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
            let currentReport = report[powerMeterId];

            if(!currentPowerMeter.isSelected || currentReport.isFetching || currentReport.didInvalidate) {
                return;
            }

            plotData.push({
                plotId: currentReport.uniqueId,
                data: currentReport.fullReport,
                yaxis: currentReport.unit == 'm3' ? 2 : 1,
                color: currentPowerMeter.color,
                shadowSize: 0,
                label: currentPowerMeter.data.name,
                unit: currentReport.unit,
                lines: {
                    zero: false,
                    lineWidth: 2,
                    show: true,
                    fill: true,
                    steps: false
                }
            });
            start = currentReport.start;
            end = currentReport.end;
            stepSize = currentReport.stepSize;
        });
        return (
            <FlotChart style={{height: 250}} start={start} end={end} stepSize={stepSize} className="row-bottom-spacing" plotData={plotData} />
        );
    }
});

export default ChartWrapper;
