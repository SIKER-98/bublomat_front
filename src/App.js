import React from 'react';
import {HashRouter, Switch, Route, Link} from "react-router-dom";

import './index.css'

import Navigation from "./components/navigation/Navigation";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Search from "./components/search/Search";

import {FetchProduct} from './api/ApiProduct'

export default function App() {
  return (
      <HashRouter>
        <Navigation/>
          {/*{FetchProduct()}*/}

        <div className={'content'}>
          <Route path={'/home'} component={Home}/>
          <Route path={'/search'} component={Search}/>
          <Route path={'/about'} component={About}/>
          <Route path={'/contact'} component={Contact}/>
          <Route path={'/login'} component={Login}/>
          <Route path={'/register'} component={Register}/>
        </div>

        <Footer/>
      </HashRouter>
  )
}

