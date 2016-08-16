import React from 'react';
import { Checkbox, Form, FormGroup } from 'react-bootstrap';

var PowerMeterSelect = React.createClass({
    handleChange: function(e){
        const { powerMeterActions, reportActions } = this.props;

        powerMeterActions.changeSelectedPowerMeter(e.target.value, e.target.checked);
        reportActions.receiveReportsIfNeeded();
    },
    render: function() {
        var powerMeters = this.props.powerMeter.powerMetersById;
        return (
            <Form componentClass="fieldset" inline>
                <FormGroup>
                    {
                        Object.keys(powerMeters).map((key) =>
                            <Checkbox checked={powerMeters[key].isSelected} key={powerMeters[key].data.id} value={powerMeters[key].data.id} onChange={this.handleChange}>
                                {powerMeters[key].data.name}
                                <span className="text-muted">({powerMeters[key].data.unit})</span>
                            </Checkbox>)
                    }
                </FormGroup>
            </Form>
        );
    }
});

export default PowerMeterSelect;
