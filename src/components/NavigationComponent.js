import React from 'react';
import '../style/Navigation.css';
import AuthenticationService from "../authentication/AuthenticationService";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router'


/// Komponent z paskiem nawigacyjnym
class NavigationComponent extends React.Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        const isAdminLoggedIn = AuthenticationService.isAdminLoggedIn();

        return (
            <header className={'navbar'}>
                <Link to={'/home'}
                      className={'navbar-logo'}>Bublomat</Link>

                <nav className={'navbar-nav'}>
                    <ul className={'navbar-nav-page'}>
                        <li>
                            <Link to={'/home'}
                                  className={'navbar-nav-item'}>Home</Link>
                        </li>
                        {isUserLoggedIn && <li>
                            <Link to={'/search/'}
                                  className={'navbar-nav-item'}>Search</Link>
                        </li>}
                        {isUserLoggedIn && <li>
                            <Link to={'/scanner'}
                                  className={'navbar-nav-item'}>Scanner</Link>
                        </li>}
                        <li>
                            <Link to={'/about'}
                                  className={'navbar-nav-item'}>About us</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}
                                  className={'navbar-nav-item'}>Contact</Link>
                        </li>
                    </ul>

                    <ul className={'navbar-nav-login '}>
                        {!isUserLoggedIn && <li>
                            <Link to={'/login'}
                                  className={'navbar-nav-item'}>Login</Link>
                        </li>}
                        {!isUserLoggedIn &&
                        <li>
                            <Link to={'/register'}
                                  className={'navbar-nav-item'}>Register</Link>
                        </li>}

                        {isAdminLoggedIn &&
                        <li>
                            <Link to={'/manageproduct'}
                                  className={'navbar-nav-item'}>Manage</Link>
                        </li>
                        }


                        {isUserLoggedIn &&
                        <li>
                            <Link to={'/home'}
                                  className={'navbar-nav-item'}
                                  onClick={AuthenticationService.logout}>Logout</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavigationComponent);
