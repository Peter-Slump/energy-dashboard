import React from 'react';
import {
    Button,
    Col,
    ControlLabel,
    Form,
    FormControl,
    FormGroup,
    Grid,
    PageHeader,
    Panel,
    Row
} from 'react-bootstrap';

const Login = React.createClass({
    render: function(){
        return (
            <Grid fluid={false}>
                <Row>
                    <Col xsOffset={3} xs={6} mdOffset={3} md={6}>
                        <Panel>
                            <h4>
                                Authenticate
                            </h4>
                            <Form horizontal>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col sm={12}>
                                        <FormControl type="text" placeholder="Username" />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col sm={12}>
                                        <FormControl type="password" placeholder="Password" />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col sm={12}>
                                        <Button type="submit">
                                            Login
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Panel>
                   </Col>
                </Row>
            </Grid>
        );
    }
});

export default Login;
