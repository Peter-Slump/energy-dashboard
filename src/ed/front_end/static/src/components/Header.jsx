import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { t as _ } from '../i18n';

const Header = React.createClass({
    render: function(){
        const { auth, user } = this.props;
        let signedInLine = '';
        if( auth.loggedIn ) {
            if( user.isFetching ){
                signedInLine =_('Fetching...');
            } else if( user.firstName || user.lastName ) {
                signedInLine = _('Signed in as %s %s', user.firstName, user.lastName);
            } else {
                signedInLine = _('Signed in as %s', user.username);
            }
        } else {
            signedInLine = _('Not logged in');
        }

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">{_('Energy Dashboard')}</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <Navbar.Text>
                            {signedInLine}
                            (<Link to={auth.loggedIn ? '/logout' : '/login' }>{auth.loggedIn ? _('Logout') : _('Login') }</Link>)
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

export default Header;