import React from 'react';
import { Checkbox, Form, FormGroup } from 'react-bootstrap';

var PowerMeterSelect = React.createClass({
    handleChange: function(e){
        console.log(this, e);
        this.props.changeSelectedPowerMeter(e.target.value, e.target.checked);
    },
    render: function() {
        var powerMeters = this.props.readingReports.powerMeterList.powerMeters,
        powerMetersCheckedState = this.props.readingReports.powerMeters;
        powerMeters = powerMeters == null ? [] : powerMeters;
        return (
            <Form componentClass="fieldset" inline>
                <FormGroup>
                    {
                        powerMeters.map((powerMeter, i) =>
                            <Checkbox checked={powerMetersCheckedState[powerMeter.id]} key={powerMeter.id} value={powerMeter.id} onChange={this.handleChange}>
                                {powerMeter.name}
                                <span className="text-muted">({powerMeter.unit})</span>
                            </Checkbox>)
                    }
                </FormGroup>
            </Form>
        );
    }
});

export default PowerMeterSelect;
