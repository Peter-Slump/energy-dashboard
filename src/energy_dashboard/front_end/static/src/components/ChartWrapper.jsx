import jQuery from 'jquery';
import React from 'react';
import FlotChart from './FlotChart';

var ChartWrapper = React.createClass({
    render: function() {
        var plotData =[];
        jQuery.each(this.props.readingReports.reports, function(k, item){
            var series = item.report.map(function(item){
                return [new Date(item.datetime), parseFloat(item.value_increment)]
            });
            plotData.append({
                data: series,
                color: 'rgb(86, 175, 232)',
                shadowSize: 0,
                label: 'Meter #1',
                stack: true,
                lines: {
                    lineWidth: 2,
                    show: true,
                    fill: true
                }
            });
        });
        console.log(plotData);
        return (
            <FlotChart style={{height: 250}} className="row-bottom-spacing" plotData={plotData} />
        );
    }
});

export default ChartWrapper;
