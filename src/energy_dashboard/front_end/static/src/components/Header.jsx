import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

const Header = React.createClass({
    render: function(){
        return (
            <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link to="/">Energy Dashboard</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                  <Link to="/login">Login</Link>
                </Navbar.Header>
            </Navbar>
        );
    }
});

export default Header;