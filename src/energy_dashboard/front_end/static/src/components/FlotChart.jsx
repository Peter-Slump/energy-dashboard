import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import moment from 'moment';

// we need flot and the various plugins
require('flot');
require('flot/jquery.flot.stack');
require('flot/jquery.flot.time');
require('flot-tooltip/jquery.flot.tooltip');

let numberWithCommas = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

let buildTooltipHandler = function(dataSets) {
    return function(_l, xval, _y, flotItem) {
        let {series, dataIndex} = flotItem;
        let time = series.data[dataIndex][0];
        let yval;
        let content = '<div class="panel panel-primary"><div class="panel-heading"><h3 class="panel-title">';
        content += getTime(time, series.xaxis.options.minTickSize[1]);
        content += '</h3></div><div class="panel-body">';
        for (let i = 0; i < dataSets.length; i++) {
            yval = dataSets[i].data.find(function(item){
                return item[0].valueOf() == time.valueOf();
            });
            yval = yval === undefined ? '-' : numberWithCommas(yval[1]);
            content += '<strong style="color:' + dataSets[i].color + '">'
            content += dataSets[i].label + ':</strong> ' + yval + '<br>';
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

  shouldComponentUpdate(nextProps, nextState) {
    // TODO(dcramer): improve logic here
    return nextProps.plotData.length > 0;
  },

  componentDidUpdate() {
    this.renderChart();
  },

  componentWillUnmount() {
    jQuery(window).unbind('resize', this.renderChart);
  },

  renderChart(options) {
    let series = this.props.plotData;
    let plotOptions = {
      xaxis: {
        mode: 'time',
        minTickSize: [1, this.props.stepSize],
        min: this.props.start,
        max: this.props.end,
        color: '#666666',
      },
      yaxis: {
        min: 0,
        minTickSize: 0.01,
        color: '#666666',
      },
      tooltip: true,
      tooltipOpts: {
        content: buildTooltipHandler(series),
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
      lines: {show: false},
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
