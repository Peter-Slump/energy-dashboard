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

            if(!currentPowerMeter.isSelected || currentReport.didInvalidate) {
                return;
            }

            let barWidth = 24 * 60 * 60 * 1000;
            if( currentReport.stepSize == 'minute' ) {
                barWidth = 60 * 1000;
            } else if ( currentReport.stepSize == 'hour' ) {
                barWidth = 60 * 60 * 1000;
            } else if ( currentReport.stepSize == 'day' ) {
                barWidth = 24 * 60 * 60 * 1000;
            } else if ( currentReport.stepSize == 'month' ) {
                barWidth = 30 * 24 * 60 * 60 * 1000;
            } else if ( currentReport.stepSize == 'year' ) {
                barWidth = 365 * 24 * 60 * 60 * 1000;
            }

            plotData.push({
                plotId: currentReport.uniqueId,
                data: currentReport.fullReport,
                yaxis: currentReport.unit == 'm3' ? 2 : 1,
                color: currentPowerMeter.color,
                shadowSize: 0,
                label: currentPowerMeter.data.name,
                unit: currentReport.unit,
                bars: {
                    show: currentReport.stepSize != 'minute',
                    align: 'left',
                    barWidth: barWidth * 0.6  // 60%
                },
                lines: {
                    show: currentReport.stepSize == 'minute',
                    zero: false,
                    lineWidth: 2,
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
