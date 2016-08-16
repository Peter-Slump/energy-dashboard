import React from 'react';
import {
    Button,
    ButtonToolbar,
    ButtonGroup,
    Clearfix,
    Col,
    FormControl,
    Glyphicon,
    InputGroup
} from 'react-bootstrap';

var ReadingsViewPresets = React.createClass({
    handleClick: function(e){
        const {reportPeriodActions, reportActions} = this.props;
        reportPeriodActions.changeReportPeriod(e.target.value);
        reportActions.receiveReportsIfNeeded();
    },
    render: function() {
        const { reportPeriod } = this.props;
        return (
            <ButtonToolbar className="row-bottom-spacing">
                <ButtonGroup>
                    <Button active={reportPeriod.period == 'year'} value={'year'} onClick={this.handleClick}>Year</Button>
                    <Button active={reportPeriod.period == 'month'} value={'month'} onClick={this.handleClick}>Month</Button>
                    <Button active={reportPeriod.period == 'week'} value={'week'} onClick={this.handleClick}>Week</Button>
                    <Button active={reportPeriod.period == 'day'} value={'day'} onClick={this.handleClick}>Day</Button>
                </ButtonGroup>
                {/*
                <Col xs={3} md={3}>
                    <InputGroup>
                        <InputGroup.Button>
                            <Button>
                                <Glyphicon glyph="chevron-left" />
                            </Button>
                        </InputGroup.Button>
                        <FormControl disabled type="text" />
                        <InputGroup.Button>
                            <Button>
                                <Glyphicon glyph="chevron-right" />
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </Col>
                */}
            </ButtonToolbar>
        );
    }
});

export default ReadingsViewPresets;
