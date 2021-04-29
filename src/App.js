import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './index.css'
import './style/Reset.css'

import Navigation from "./components/navigation/NavigationComponent";
import LoginComponent from "./components/login/LoginComponent";
import Footer from "./components/footer/Footer";
import RegisterComponent from "./components/login/RegisterComponent";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import AuthenticatedRoute from "./components/authentication/AuthenticatedRoute";
import NewProduct from "./components/newProduct/NewProduct";

export default function App() {
    return (
        <BrowserRouter>
            <>
                <Navigation/>
                <div className={'content'}>
                    <Switch>
                        <Route path={'/'} exact component={LoginComponent}/>
                        <Route path={'/home'} component={Home}/>
                        <AuthenticatedRoute path={'/search/:productName'} component={Search}/>
                        <AuthenticatedRoute path={'/search'} component={Search}/>
                        <AuthenticatedRoute path={'/newProduct'} component={NewProduct}/>
                        <Route path={'/about'} component={About}/>
                        <Route path={'/contact'} component={Contact}/>
                        <Route path={'/login'} component={LoginComponent}/>
                        <Route path={'/register'} component={RegisterComponent}/>
                    </Switch>
                </div>

                <Footer/>
            </>
        </BrowserRouter>
    )
}