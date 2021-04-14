import React from 'react';

import './Login.css';

class Login extends React.Component {

    render() {
        return (
                <form className={'login'}>
                    <label className={'loginLabel'}>Nickname:</label>
                    <input className={'loginInput'} type={'text'}/>
                    <label className={'loginLabel'}>Password:</label>
                    <input className={'loginInput'} type={'password'}/>
                    <button className={'loginButton'}>Login</button>
                </form>
        )
    }
}

export default Login;