import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './index.css'

import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import AuthenticatedRoute from "./components/authentication/AuthenticatedRoute";
import ErrorComponent from "./components/error/ErrorComponent";

export default function App() {
    return (
        <BrowserRouter>
            <>
                <Navigation/>
                <div className={'content'}>
                    <Switch>
                        <Route path={'/'} exact component={Login}/>
                        <Route path={'/home'} component={Home}/>
                        <AuthenticatedRoute path={'/search'} component={Search}/>
                        <Route path={'/about'} component={About}/>
                        <Route path={'/contact'} component={Contact}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/register'} component={Register}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                </div>

                <Footer/>
            </>
        </BrowserRouter>
    )
}