import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { t as _ } from '../i18n';
import LanguageSelect from './LanguageSelect';

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
                        <Link to="/">
                            <img alt={_('Energy Dashboard')} title={_('Energy Dashboard')} src="static/image/logo.png" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <Navbar.Text>{signedInLine}</Navbar.Text>
                        <NavItem to={ auth.loggedIn ? '/logout' : '/login' }>
                            { auth.loggedIn ? _('Logout') : _('Login') }
                        </NavItem>
                        <LanguageSelect {...this.props} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

export default Header;