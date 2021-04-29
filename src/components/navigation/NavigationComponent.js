import React from 'react';
import '../../style/Navigation.css';
import AuthenticationService from "../authentication/AuthenticationService";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router'

class NavigationComponent extends React.Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

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