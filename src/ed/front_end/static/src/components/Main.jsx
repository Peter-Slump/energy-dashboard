import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import Header from './Header'
import Notifier from './Notifier';
import { t as _ } from '../i18n';

const Main = React.createClass({
    render: function(){
        let props = Object.assign({}, this.props)

        delete props.key
        delete props.ref

        return (
            <div>
                <Header {...this.props}></Header>
                {React.cloneElement(this.props.children, props)}
                <footer>
                    <Grid fluid={false}>
                        <Row>
                            <Col md={12}>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/credits">{_('Credits')}</Link>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Peter-Slump/energy-dashboard">Github</a>
                                    </li>
                                </ul>
                                <p>
                                {_('Created by')} <a href="http://peter-slump.nl/">Peter Slump</a>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
                <Notifier alerts={props.notification || []}></Notifier>
            </div>
        );
    }
});

export default Main;
