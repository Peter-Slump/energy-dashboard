import React from 'react';
import {
    Dropdown,
    MenuItem,
    NavDropdown
} from 'react-bootstrap';
import { t as _ } from '../i18n';


const LanguageSelect = React.createClass({
    render: function(){
        return (
            <Dropdown componentClass="li" className="language-select">
                <Dropdown.Toggle useAnchor={true}>
                    <img src="static/image/flags/24x24/NL.png" title={_('Dutch')} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <MenuItem>
                       <img src="static/image/flags/24x24/NL.png" title={_('Dutch')} />
                    </MenuItem>
                    <MenuItem>
                        <img src="static/image/flags/24x24/GB.png" title={_('English')} />
                    </MenuItem>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
});

export default LanguageSelect;
