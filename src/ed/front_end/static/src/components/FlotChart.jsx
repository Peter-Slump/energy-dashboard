import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import moment from 'moment';
import { t as _ } from '../i18n';

// we need flot and the various plugins
require('flot');
require('flot/jquery.flot.time');
require('flot-tooltip/jquery.flot.tooltip');

let numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

let buildTooltipHandler = function(dataSets, stepSize) {
    return function(_l, xval, _y, flotItem) {
        let {series, dataIndex} = flotItem;
        let time = series.data[dataIndex][0];
        let yval, unitLabel;
        let content = '<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">';
        content += getTime(time, series.xaxis.options.minTickSize[1]);
        content += '</h3></div><div class="panel-body">';
        for (let i = 0; i < dataSets.length; i++) {
            yval = dataSets[i].data.find(function(item){
                return item[0].valueOf() == time.valueOf();
            });
            yval = yval === undefined ? '-' : numberWithCommas(yval[1]);
            switch (dataSets[i].unit) {
                case 'm3':
                    unitLabel = 'm³'
                    break;
                case 'w':
                    unitLabel = _('Watt');
                    break;
                case 'kwh':
                    unitLabel = _('kWh');
                    break;
                default:
                    unitLabel = '';
                    break;
            }
            content += '<strong style="color:' + dataSets[i].color + '">'
            content += dataSets[i].label + ':</strong> ' + yval;
            if( yval != '-' ) {
                content += ' <span class="text-muted">' + unitLabel  + '</span>';
            }
            content += '<br>';
        }
        content += '</div></div>';
        return content;
    }
}

let getTime = function(time, stepSize) {
    let m = moment(time);
    let fmt;

    switch (stepSize) {
        case 'minute':
        case 'hour':
            fmt = 'LLL'
            break;
        case 'day':
            fmt = 'LL';
            break;
        case 'month':
            fmt = 'MMMM YYYY';
            break;
        default:
            fmt = 'LTS';
            break;
    }
    return m.format(fmt);
}

const FlotChart = React.createClass({
    propTypes: {
        plotData: React.PropTypes.array,
        style: React.PropTypes.object
    },

    componentDidMount() {
        this.renderChart();
        jQuery(window).resize(this.renderChart);
    },

    componentDidUpdate() {
        this.renderChart();
    },

    shouldComponentUpdate(nextProps, nextState) {
        let ids = this.props.plotData.map(function(value){
            return value['plotId'];
        });
        let nextIds = nextProps.plotData.map(function(value){
            return value['plotId'];
        });
        return ids.sort().join() != nextIds.sort().join();
    },

    componentWillUnmount() {
        jQuery(window).unbind('resize', this.renderChart);
    },

    renderChart(options) {
        let series = this.props.plotData;
        let stepSize = this.props.stepSize
        let plotOptions = {
            xaxis: {
                mode: 'time',
                timezone: 'browser',
                minTickSize: [1, this.props.stepSize],
                min: this.props.start,
                max: this.props.end,
                color: '#666666',
                monthNames: moment.monthsShort('-MMM-')
            },
            yaxis: {
                min: 0,
                minTickSize: 0.001,
                tickDecimals: 3,
                color: '#222222',
            },
            yaxes: [
                {
                    // Watt/kWh
                    position: 'left',
                    tickFormatter: function(v, axis) {
                        if(stepSize == 'minute'){
                            return v.toFixed(0) + _(' W');
                        } else {
                            return v.toFixed(axis.tickDecimals) + _(' kWh');
                        }
                    }
                },
                {
                    // m3
                    position: 'right',
                    tickFormatter: function(v, axis) {
                        return v.toFixed(axis.tickDecimals) + _(' m³')
                    }
                },
            ],
            tooltip: true,
            tooltipOpts: {
                content: buildTooltipHandler(series, this.props.stepSize),
                defaultTheme: false
            },
            grid: {
                show: true,
                hoverable: true,
                backgroundColor: '#FFFFFF',
                borderColor: '#DDDDDD',
                borderWidth: 1,
                color: '#666666',
                tickColor: '#DDDDDD'
            },
            hoverable: false,
            legend: {
                noColumns: series.length,
                position: 'nw'
            },
        };
        let chart = ReactDOM.findDOMNode(this.refs.chartNode);
        jQuery.plot(chart, series, plotOptions);
    },

    render() {
        return (
            <figure
                className={this.props.className || 'chart'}
                style={this.props.style}
                ref="chartNode" />
        );
    }
});

export default FlotChart;
