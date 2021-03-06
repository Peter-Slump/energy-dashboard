import React from 'react';
import {
    Dropdown,
    MenuItem,
    NavDropdown
} from 'react-bootstrap';
import {
    setLocale
 } from '../i18n';


const LanguageSelect = React.createClass({
    setLanguage: function(code) {
        const {languageActions} = this.props;
        languageActions.changeLanguage(code);
    },
    render: function(){
        const {language} = this.props;
        let languages = language.availableLanguages;

        return (
            <Dropdown componentClass="li" id="language-select" className="language-select">
                <Dropdown.Toggle useAnchor={true}>
                    <img src={"static/image/flags/24x24/"+ language.code +".png"} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        Object.keys(languages).map((key) =>
                            <MenuItem key={key} onClick={this.setLanguage.bind(null, key)}>
                               <img src={"static/image/flags/24x24/" + key + ".png"} />
                            </MenuItem>)
                    }
                </Dropdown.Menu>
            </Dropdown>
        );
    }
});

export default LanguageSelect;
