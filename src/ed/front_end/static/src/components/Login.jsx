import React from 'react';
import ReactDom from 'react-dom';
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
import { t as _ } from '../i18n';


const Login = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        const { username, password, loginForm } = this.refs;
        this.props.authActions.login(
            ReactDom.findDOMNode(username).value,
            ReactDom.findDOMNode(password).value
        );
        ReactDom.findDOMNode(loginForm).reset();
    },
    render: function(){
        return (
            <Grid fluid={false}>
                <Row>
                    <Col xsOffset={3} xs={6} mdOffset={3} md={6}>
                        <Panel>
                            <h4>
                                {_('Authenticate')}
                            </h4>
                            <Form horizontal ref="loginForm" onSubmit={this.handleSubmit}>
                                <FormGroup controlId="formHorizontalEmail">
                                    <Col sm={12}>
                                        <FormControl type="text" ref="username" placeholder={_('Username')} />
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalPassword">
                                    <Col sm={12}>
                                        <FormControl type="password" ref="password" placeholder={_('Password')} />
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col sm={12}>
                                        <Button type="submit">
                                            {_('Login')}
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
