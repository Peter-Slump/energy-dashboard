import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';


const Header = React.createClass({
    render: function(){
        const { auth, user } = this.props;
        let signedInLine = '';
        if( auth.loggedIn ) {
            if( user.isFetching ){
                signedInLine = 'Fetching...';
            } else if( user.firstName || user.lastName ) {
                signedInLine = 'Signed in as ' + user.firstName + ' ' + user.lastName + ' ';
            } else {
                signedInLine = 'Signed in as ' + user.username + ' ';
            }
        } else {
            signedInLine = 'Not logged in ';
        }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Energy Dashboard</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <Navbar.Text>
                            {signedInLine}
                            (<Link to={auth.loggedIn ? '/logout' : 'login' }>{auth.loggedIn ? 'Logout' : 'Login' }</Link>)
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

export default Header;