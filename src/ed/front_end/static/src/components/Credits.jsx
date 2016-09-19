import React from 'react';
import {
    Col,
    Grid,
    PageHeader,
    Row
} from 'react-bootstrap';
import { t as _ } from '../i18n';

const Credits = React.createClass({
    render: function(){
        return (
            <Grid fluid={false}>
                <Row>
                    <Col md={12}>
                        <PageHeader>
                            {_('Credits')}
                        </PageHeader>
                        <p>{_('This project is made possible with the following tools')}</p>

                        <h4>Back-end</h4>
                        <a href="https://www.djangoproject.com/">Django project</a>
                        <br />
                        <a href="http://www.django-rest-framework.org/">Django Rest Framework</a>

                        <h4>Front-end</h4>
                        <a href="https://facebook.github.io/react/">React</a>
                        <br />
                        <a href="https://react-bootstrap.github.io/">React Bootstrap</a>
                        <br />
                        <a href="http://redux.js.org">React Redux</a>
                        <br />
                        <a href="https://github.com/reactjs/react-router">React Router</a>

                        <h4>Styling</h4>
                        <a href="https://getboostrap.com/">Twitter Bootstrap</a>
                        <br />
                        <a href="https://bootswatch.com/paper/">Bootswatch Paper theme</a>
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default Credits;
