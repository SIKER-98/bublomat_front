import React, {Component} from "react";
import {Route} from "react-router-dom";
import {Redirect} from "react-router";

import AuthenticationService from "./AuthenticationService";
import axios from "../api/axiosHelper";

// komponent majacy za zadanie przekierowac niezalogowanych uzytkownikow do komponentu logowania
class AuthenticatedRoute extends Component {
    render() {
        if(this.props.role==='admin'){
            if(AuthenticationService.isAdminLoggedIn()){
                return <Route {...this.props}/>;
            }else{
                return <Redirect to={'/home'}/>;
            }
        }else {
            if (AuthenticationService.isUserLoggedIn()) {
                axios.defaults.headers = {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
                return <Route {...this.props}/>;
            } else {
                return <Redirect to={'/login'}/>;
            }
        }
    }
}

export default AuthenticatedRoute
