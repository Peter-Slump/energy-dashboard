import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { t as _ } from '../i18n';

const Logout = React.createClass({
    componentDidMount: function() {
        this.props.authActions.logout().then(
            () => browserHistory.push('/login')
        );
    },
    render: function(){
        return (
            <Grid fluid={false}>
                <Row>
                    <Col md={12}>
                        <p>{_('Logging you out...')}</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Logout;
