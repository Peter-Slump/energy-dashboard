import React from 'react';
import { Checkbox, Form, FormGroup } from 'react-bootstrap';
import moment from 'moment';
import { t as _ } from '../i18n';

var PowerMeterSelect = React.createClass({
    handleChange: function(e){
        const { powerMeterActions, reportActions } = this.props;

        powerMeterActions.changeSelectedPowerMeter(e.target.value, e.target.checked);
        reportActions.receiveReportsIfNeeded();
    },
    render: function() {
        var powerMeters = this.props.powerMeter.powerMetersById;
        function formatLabel(powerMeter) {
            let datetime = moment(powerMeter.current_value_datetime);
            let label = powerMeter.name;

            if(powerMeter.current_value != null && datetime > moment().subtract(5, 'minutes')) {
                label += ' - ';
                label += _('Current usage:') + ' ';
                label += powerMeter.current_value * 1000;
                label += ' ' + _('W') + ' (';
                label += datetime.fromNow();
                label += ')';
            }
            return label;
        }

        return (
            <Form>
                {
                    Object.keys(powerMeters).map((key) =>
                        <Checkbox checked={powerMeters[key].isSelected} key={powerMeters[key].data.id} value={powerMeters[key].data.id} onChange={this.handleChange}>
                            {formatLabel(powerMeters[key].data)}
                        </Checkbox>)
                }
            </Form>
        );
    }
});

export default PowerMeterSelect;
