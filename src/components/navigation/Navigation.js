import React from 'react';
import './Navigation.css';
import AuthenticationService from "../authentication/AuthenticationService";
import {Link} from "react-router-dom";
import {withRouter} from 'react-router'

class Navigation extends React.Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <div className={"logo"}>
                    <a>Bublomat</a>
                </div>

                <nav>
                    <ul className={'navigationPage'}>
                        <li><Link to={'/home'}>Home</Link></li>
                        {isUserLoggedIn && <li><Link to={'/search'}>Search</Link></li>}
                        <li><Link to={'/about'}>About us</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                    <ul className={'navigationLogin'}>
                        {!isUserLoggedIn && <li><Link to={'/login'}>Login</Link></li>}
                        {!isUserLoggedIn && <li><Link to={'/register'}>Register</Link></li>}
                        {isUserLoggedIn &&
                        <li>
                            <Link to={'/home'}
                                  onClick={AuthenticationService.logout}>Logout</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(Navigation);