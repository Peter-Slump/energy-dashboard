var React = require('react'),
    $ = require('jquery'),
    FlotChart = require('./flotChart'),
    ReactBootstrap = require('react-bootstrap');

// React-Bootstrap mappings
var Checkbox = ReactBootstrap.Checkbox,
    Col = ReactBootstrap.Col,
    FormGroup = ReactBootstrap.FormGroup,
    Label = ReactBootstrap.Label,
    Row = ReactBootstrap.Row;

var BaseBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    fetchData: function(power_meter, interval, start, end) {
        start.setMilliseconds(0);
        end.setMilliseconds(0);
        $.ajax({
            url: '/api/reading-report/'+power_meter+'/'+interval+'/'+start.toISOString()+'/'+end.toISOString()+'/',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        var last_year = new Date();
            last_year.setFullYear(2015)
        this.fetchData(1, 'hourly', last_year, new Date())
    },
    render: function() {
        var series = [];
        this.state.data.map(function(reading){
            series.push([new Date(reading.datetime), parseFloat(reading.value_increment)]);
        });
        var plotData = [
            {
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
            },
        ]
        return (
            <FlotChart style={{height: 250}} plotData={plotData} />
        );
    }
});

var PowerMeterWrapper = React.createClass({
    getInitialState: function() {
        return {enabled: [], data: []};
    },
    fetchData: function() {
        $.ajax({
            url: '/api/power-meter/',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {
        this.fetchData();
    },
    handleChange: function(e) {
        console.log(e.target.value);
    },
    render: function() {
        var that = this;
        var checkBoxes = this.state.data.map(function(powerMeter){
            return (
                <Checkbox inline key={powerMeter.id} value={powerMeter.id} onChange={that.handleChange}>
                    {powerMeter.name}
                    <span className="muted">{powerMeter.unit}</span>
                </Checkbox>
            );
        });
        return (
            <FormGroup>
                {checkBoxes}
            </FormGroup>
        );
    }
});

var Page = React.createClass({
    render: function() {
        return (
            <Row>
                <Col xs={12} md={8}>
                    <PowerMeterWrapper />
                    <BaseBox />
                </Col>
            </Row>
        );
    }
});

module.exports = Page;