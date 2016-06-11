import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import Header from './Header'

const Main = React.createClass({
    render: function(){
        return (
            <div>
                <Header></Header>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
});

export default Main;
