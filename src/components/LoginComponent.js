import React from 'react';

import '../style/Form.css'
import AuthenticationService from "../authentication/AuthenticationService";
import {GetAccessToken} from "../api/ApiUser";
import lang from '../languagePack'


class LoginComponent extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

        this.lang = lang.getLang()
    }


    // obsluga wprowadzania w inputy
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // przycisk logowania
    async loginClicked(event) {
        event.preventDefault();

        let status = await GetAccessToken(this.state.username, this.state.password)

        if (status === 200) {
            if(this.state.username==='admin')
            AuthenticationService.loginSuccessful(this.state.username, '2', 'admin');
            else
                AuthenticationService.loginSuccessful(this.state.username, '1', 'user');
            this.props.history.push('/search/');
        } else {
            this.setState({hasLoginFailed: true});
            alert('Invalid login or password')
        }

        // if (this.state.username === 'user' && this.state.password === 'user') {
        //     AuthenticationService.loginSuccessful(this.state.username, '1', 'user');
        //     this.props.history.push('/home');
        // } else if (this.state.username === 'admin' && this.state.password === 'admin') {
        //     AuthenticationService.loginSuccessful(this.state.username, '2', 'admin');
        //     this.props.history.push('/manageProduct');
        // } else {
        //     this.setState({hasLoginFailed: true});
        //     alert('Invalid login or password')
        // }
    }

    render() {
        return (
            <form className={'form'}>
                <label className={'form-label'}>{this.lang.loginComponent.email}</label>
                <input name={'username'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={`form-input ${this.state.hasLoginFailed ? 'form-input-wrong' : ''}`}
                       type={'email'}/>

                <label className={'form-label'}>{this.lang.loginComponent.password}</label>
                <input name={'password'}
                       onChange={this.handleChange}
                       className={`form-input ${this.state.hasLoginFailed ? 'form-input-wrong' : ''}`}
                       type={'password'}/>

                <button className={'btn-blue'}
                        onClick={this.loginClicked}>{this.lang.loginComponent.login}
                </button>
            </form>
        )
    }
}

export default LoginComponent;
