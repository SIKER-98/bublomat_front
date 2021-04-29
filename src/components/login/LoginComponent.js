import React from 'react';

import '../../style/Form.css'
import AuthenticationService from "../authentication/AuthenticationService";

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
    }

    // obsluga wprowadzania w inputy
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // przycisk logowania
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
            <form className={'form'}>
                <label className={'form-label'}>Nickname:</label>
                <input name={'username'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={`form-input ${this.state.hasLoginFailed ? 'form-input-wrong' : ''}`}
                       type={'text'}/>

                <label className={'form-label'}>Password:</label>
                <input name={'password'}
                       onChange={this.handleChange}
                       className={`form-input ${this.state.hasLoginFailed ? 'form-input-wrong' : ''}`}
                       type={'password'}/>

                <button className={'btn-blue'}
                        onClick={this.loginClicked}>Login</button>
            </form>
        )
    }
}

export default LoginComponent;