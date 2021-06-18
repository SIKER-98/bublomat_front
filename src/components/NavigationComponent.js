import React from 'react';
import '../style/Navigation.css';
import AuthenticationService from "../authentication/AuthenticationService";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router'
import lang from '../languagePack'


/// Komponent z paskiem nawigacyjnym
class NavigationComponent extends React.Component {
    constructor(props) {
        super(props);
        this.lang = lang.getLang()
    }

    render() {

        // const isUserLoggedIn = true;
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const isAdminLoggedIn = AuthenticationService.isAdminLoggedIn();
        // const isAdminLoggedIn = true;

        return (
            <header className={'navbar'}>
                <Link to={'/home'}
                      className={'navbar-logo'}>Bublomat</Link>

                <nav className={'navbar-nav'}>
                    <ul className={'navbar-nav-page'}>
                        <li>
                            <Link to={'/home'}
                                  className={'navbar-nav-item'}>{this.lang.navigationComponent.home}</Link>
                        </li>
                        {isUserLoggedIn && <li>
                            <Link to={'/search/'}
                                  className={'navbar-nav-item'}>{this.lang.navigationComponent.search}</Link>
                        </li>}
                        {isUserLoggedIn && <li>
                            <Link to={'/scanner'}
                                  className={'navbar-nav-item'}>{this.lang.navigationComponent.scanner}</Link>
                        </li>}
                        <li>
                            <Link to={'/about'}
                                  className={'navbar-nav-item'}>{this.lang.navigationComponent.aboutUs}</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}
                                  className={'navbar-nav-item'}>{this.lang.navigationComponent.contact}</Link>
                        </li>
                    </ul>

                    <ul className={'navbar-nav-login '}>
                        {!isUserLoggedIn && <li>
                            <Link to={'/login'}
                                  className={'navbar-nav-item'}>{this.lang.navigationComponent.login}</Link>
                        </li>}
                        {!isUserLoggedIn &&
                        <li>
                            <Link to={'/register'}
                                  className={'navbar-nav-item'}>{this.lang.navigationComponent.register}</Link>
                        </li>}

                        {isAdminLoggedIn &&
                        <li>
                            <Link to={'/manageproduct'}
                                  className={'navbar-nav-item'}>{this.lang.navigationComponent.manage}</Link>
                        </li>
                        }


                        {isUserLoggedIn &&
                        <li>
                            <Link to={'/home'}
                                  className={'navbar-nav-item'}
                                  onClick={AuthenticationService.logout}>{this.lang.navigationComponent.logout}</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavigationComponent);
