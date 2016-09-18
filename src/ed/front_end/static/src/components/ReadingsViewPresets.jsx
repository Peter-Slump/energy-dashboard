import moment from 'moment';
import React from 'react';
import {
    Button,
    ButtonGroup,
    Clearfix,
    Col,
    FormControl,
    Glyphicon,
    InputGroup,
    Row
} from 'react-bootstrap';

var ReadingsViewPresets = React.createClass({
    handleClick: function(e){
        const {reportPeriodActions, reportActions} = this.props;
        reportPeriodActions.changeReportPeriod(e.target.value);
        reportActions.receiveReportsIfNeeded();
    },
    handleOffsetClick: function(e) {
        const {reportPeriodActions, reportActions} = this.props;
        reportPeriodActions.changeReportPeriodOffset(parseInt(e.currentTarget.value));
        reportActions.receiveReportsIfNeeded();
    },
    render: function() {
        const { reportPeriod } = this.props;
        const { period, offset } = reportPeriod;

        let offsetLabel = '';
        let now = moment();
        switch (period) {
            case 'year':
                switch (offset) {
                    case 0:
                        offsetLabel = 'This year';
                        break;
                    case -1:
                        offsetLabel = 'Last year';
                        break;
                    default:
                        now.add(offset, 'years');
                        offsetLabel = now.format('YYYY');
                }
                break;

                case 'month':
                    switch (offset) {
                        case 0:
                            offsetLabel = 'This month';
                            break;
                        case -1:
                            offsetLabel = 'Last month';
                            break;
                        default:
                            now.add(offset, 'months');
                            offsetLabel = now.format(offset > -12 ? 'MMMM' : 'MMM YYYY');
                    }
                    break;

                    case 'week':
                        switch (offset) {
                            case 0:
                                offsetLabel = 'This week';
                                break;
                            case -1:
                                offsetLabel = 'Last week';
                                break;
                            default:
                                now.add(offset, 'weeks');
                                offsetLabel = now.format(offset > -52 ? '[Week:] w' : '[Week:] w YYYY');
                        }
                        break;

                    case 'day':
                        switch (offset) {
                            case 0:
                                offsetLabel = 'Today';
                                break;
                            case -1:
                                offsetLabel = 'Yesterday';
                                break;
                            case -2:
                            case -3:
                            case -4:
                            case -5:
                            case -6:
                                now.add(offset, 'days');
                                offsetLabel = now.format('[Last] dddd');
                                break;
                            default:
                                now.add(offset, 'days');
                                offsetLabel = now.format(offset > -365 ? 'MMMM Do' : 'MMMM Do YYYY');
                        }
                        break;
            default:
                offsetLabel = 'Unknown';
        }
        return (
            <Row>
                <Col xs={12} md={4} className="row-bottom-spacing">
                    <ButtonGroup>
                        <Button active={reportPeriod.period == 'year'} value={'year'} onClick={this.handleClick}>Year</Button>
                        <Button active={reportPeriod.period == 'month'} value={'month'} onClick={this.handleClick}>Month</Button>
                        <Button active={reportPeriod.period == 'week'} value={'week'} onClick={this.handleClick}>Week</Button>
                        <Button active={reportPeriod.period == 'day'} value={'day'} onClick={this.handleClick}>Day</Button>
                    </ButtonGroup>
                </Col>
                <Col xs={12} md={4} className="row-bottom-spacing">
                    <ButtonGroup>
                        <Button value={-1} onClick={this.handleOffsetClick}>
                            <Glyphicon glyph="chevron-left" />
                        </Button>
                        <Button value={1} onClick={this.handleOffsetClick}>
                            <Glyphicon glyph="chevron-right" />
                        </Button>
                        <Button disabled>{offsetLabel}</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        );
    }
});

export default ReadingsViewPresets;
