import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import Header from './Header'

const Main = React.createClass({
    render: function(){
        return (
            <div>
                <Header {...this.props}></Header>
                {React.cloneElement(this.props.children, this.props)}
                <footer>
                    <Grid fluid={false}>
                        <Row>
                            <Col md={12}>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/credits">Credits</Link>
                                    </li>
                                    <li>
                                        <a href="https://github.com/Peter-Slump/energy-dashboard">Github</a>
                                    </li>
                                </ul>
                                <p>
                                Created by <a href="http://peter-slump.nl/">Peter Slump</a>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </footer>
            </div>
        );
    }
});

export default Main;
