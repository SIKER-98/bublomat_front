import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Redirect} from "react-router";

import AuthenticationService from "./AuthenticationService";

// komponent majacy za zadanie przekierowac niezalogowanych uzytkownikow do komponentu logowania
class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props}/>;
        } else {
            return <Redirect to={'/login'}/>;
        }
    }
}

export default AuthenticatedRoute