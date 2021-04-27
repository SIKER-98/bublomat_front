import React from 'react';

import './Login.css';
import AuthenticationService from "../authentication/AuthenticationService";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    loginClicked(event) {
        event.preventDefault();
        if (this.state.username === 'user' && this.state.password === 'user') {
            AuthenticationService.loginSuccessful(this.state.username, '1');
            this.props.history.push('/home');
        } else {
            this.setState({hasLoginFailed: true});
            alert('Invalid login or password')
        }
    }

    render() {
        return (
            <form className={'login'}>
                <label className={'loginLabel'}>Nickname:</label>
                <input name={'username'} onChange={this.handleChange}
                       className={`loginInput ${this.state.hasLoginFailed ? 'loginInputWrong' : ''}`}
                       type={'text'}/>
                <label className={'loginLabel'}>Password:</label>
                <input name={'password'} onChange={this.handleChange}
                       className={`loginInput ${this.state.hasLoginFailed ? 'loginInputWrong' : ''}`}
                       type={'password'}/>
                <button className={'loginButton'} onClick={this.loginClicked}>Login</button>
            </form>
        )
    }
}

export default Login;