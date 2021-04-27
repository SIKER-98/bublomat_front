import React from 'react';
import './Register.css';

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmedPassword: '',
            email: '',
        }

        this.username = document.getElementsByName('username');
        this.password = document.getElementsByName('password');
        this.confirmedPassword = document.getElementsByName('confirmedPassword');
        this.email = document.getElementsByName('email');


        this.handleChange = this.handleChange.bind(this);
        this.registerClicked = this.registerClicked.bind(this);
        this.validateInputRequired = this.validateInputRequired.bind(this);
        this.validatePassword = this.validatePassword.bind(this);

        this.errorMessage = '';
    }


    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        event.target.classList.remove('registerInputWrong')
    }

    validateInputRequired(input, state) {
        if (!state) {
            input[0].classList.add('registerInputWrong')
            this.errorMessage += 'Missing input: ' + input[0].name + '\n';
        }
    }

    validatePassword(password, confirmedPassword) {
        if (password[0].value !== confirmedPassword[0].value) {
            password[0].classList.add('registerInputWrong')
            confirmedPassword[0].classList.add('registerInputWrong');
            this.errorMessage += 'Different passwords\n';
        }
    }

    registerClicked(event) {
        event.preventDefault();
        const state = this.state;

        this.validateInputRequired(this.username, state.username);
        this.validateInputRequired(this.password, state.password);
        this.validateInputRequired(this.confirmedPassword, state.confirmedPassword);
        this.validateInputRequired(this.email, state.email);
        this.validatePassword(this.password, this.confirmedPassword);

        if (this.errorMessage !== '') {
            alert(this.errorMessage);
            this.errorMessage = '';
        }


        if (state.username && state.password && state.confirmedPassword && state.email) {
            if (state.password === state.confirmedPassword) {
                console.log(state);
                this.props.history.push('/login');
            }
        }
    }

    //this.props.history.push('/login');

    render() {
        return (
            <form className={'register'}>
                <label className={'registerLabel'}>Nickname:</label>
                <input type={'text'} name={'username'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={'registerInput'}/>

                <label className={'registerLabel'}>Password:</label>
                <input type={'password'} name={'password'}
                       onChange={this.handleChange}
                       autoComplete={'off'}
                       className={'registerInput'}/>

                <label className={'registerLabel'}>Confirm Password:</label>
                <input type={'password'} name={'confirmedPassword'}
                       onChange={this.handleChange}
                       autoComplete={'off'}
                       className={'registerInput'}/>

                <label className={'registerLabel'}>Email:</label>
                <input type={'email'} name={'email'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={'registerInput'}/>

                <button className={'registerButton'} onClick={this.registerClicked}>
                    Register
                </button>
            </form>
        )
    }
}

export default Register