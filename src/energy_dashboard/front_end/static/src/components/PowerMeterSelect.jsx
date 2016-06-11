import React from 'react';
import { Checkbox, Form, FormGroup } from 'react-bootstrap';

var PowerMeterSelect = React.createClass({
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
                <Checkbox key={powerMeter.id} value={powerMeter.id} onChange={that.handleChange}>
                    {powerMeter.name}
                    <span className="muted">{powerMeter.unit}</span>
                </Checkbox>
            );
        });
        return (
            <Form componentClass="fieldset" inline>
                <FormGroup>
                    {checkBoxes}
                </FormGroup>
            </Form>
        );
    }
});

export default PowerMeterSelect;
