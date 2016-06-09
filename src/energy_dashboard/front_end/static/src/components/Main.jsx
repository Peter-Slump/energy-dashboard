import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import Header from './Header'

const Main = React.createClass({
    render: function(){
        return (
            <div>
                <Header></Header>
                <Grid fluid={false}>
                    {React.cloneElement(this.props.children, this.props)}
                </Grid>
            </div>
        );
    }
});

export default Main;