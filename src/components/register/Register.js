import React from 'react';
import './Register.css';

class Register extends React.Component{

    render() {
        return(
                <form className={'register'}>
                    <label className={'registerLabel'}>Nickname:</label>
                    <input type={'text'} className={'registerInput'}/>
                    <label className={'registerLabel'}>Password:</label>
                    <input type={'password'} className={'registerInput'}/>
                    <label className={'registerLabel'}>Confirm Password:</label>
                    <input type={'password'} className={'registerInput'}/>
                    <label className={'registerLabel'}>Email:</label>
                    <input type={'email'} className={'registerInput registerInputWrong'}/>
                    <button className={'registerButton'}>Register</button>
                </form>
        )
    }
}

export default Register