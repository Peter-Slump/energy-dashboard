import React from 'react';
import { Clearfix, Col, Grid, Panel, Row } from 'react-bootstrap';
import ChartWrapper from './ChartWrapper';
import PowerMeterSelect from './PowerMeterSelect';
import ReadingsViewPresets from './ReadingsViewPresets';

const Dashboard = React.createClass({
    render: function(){
        return (
            <Grid fluid={false}>
                <Row>
                    <Col xs={12} md={12}>
                        <Panel>
                            <ReadingsViewPresets {...this.props}></ReadingsViewPresets>
                            <Clearfix></Clearfix>
                            <ChartWrapper {...this.props}></ChartWrapper>
                            <PowerMeterSelect {...this.props}></PowerMeterSelect>
                        </Panel>
                   </Col>
                </Row>
            </Grid>
        );
    }
});

export default Dashboard;
