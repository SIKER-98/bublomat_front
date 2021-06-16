import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './index.css'
import './style/Reset.css'

import Navigation from "./components/NavigationComponent";
import LoginComponent from "./components/LoginComponent";
import FooterComponent from "./components/FooterComponent";
import RegisterComponent from "./components/RegisterComponent";
import About from "./components/about/About";
import ContactComponent from "./components/ContactComponent";
import HomeComponent from "./components/home/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import NewProductComponent from "./components/NewProductComponent";
import AdminProductComponent from "./components/admin/AdminProductComponent";
import AdminCommentComponent from "./components/admin/AdminCommentComponent";
import ScannerComponent from "./components/scanner/ScannerComponent";



export default function App() {
    return (
        <>
            <BrowserRouter>
                <>
                    <Navigation/>
                    <div className={'content'}>
                        <Switch>
                            <Route path={'/'} exact component={LoginComponent}/>
                            <Route path={'/home'} component={HomeComponent}/>
                            <AuthenticatedRoute path={'/search/:productName'} component={SearchComponent}/>
                            <AuthenticatedRoute path={'/search'} component={SearchComponent}/>
                            <AuthenticatedRoute path={'/newProduct'} component={NewProductComponent}/>
                            <Route path={'/about'} component={About}/>
                            <Route path={'/contact'} component={ContactComponent}/>
                            <Route path={'/login'} component={LoginComponent}/>
                            <Route path={'/register'} component={RegisterComponent}/>

                            <AuthenticatedRoute path={'/manageProduct'} component={AdminProductComponent}
                                                role={'admin'}/>
                            <AuthenticatedRoute path={'/manageComment'} component={AdminCommentComponent}
                                                role={'admin'}/>
                            <AuthenticatedRoute path={'/scanner'} component={ScannerComponent}/>
                        </Switch>
                    </div>

                    <FooterComponent/>
                </>
            </BrowserRouter>
        </>
    )
}
