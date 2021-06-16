import React from 'react';
import '../style/Form.css'
import {Register} from "../api/ApiUser";
import AuthenticationService from "../authentication/AuthenticationService";
import lang from "../languagePack";

class RegisterComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            secondName: '',
            password: '',
            confirmedPassword: '',
            email: '',
        }

        this.firstName = document.getElementsByName('firstName');
        this.secondName = document.getElementsByName('secondName');
        this.password = document.getElementsByName('password');
        this.confirmedPassword = document.getElementsByName('confirmedPassword');
        this.email = document.getElementsByName('email');


        this.handleChange = this.handleChange.bind(this);
        this.registerClicked = this.registerClicked.bind(this);
        this.validateInputRequired = this.validateInputRequired.bind(this);
        this.validatePassword = this.validatePassword.bind(this);

        this.errorMessage = '';

        this.lang = lang.getLang()
    }

    // obsluga wprowadzania w pola
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
        event.target.classList.remove('form-input-wrong')
    }

    // sprawdzenie czy wszystkie pola zostaly podane
    validateInputRequired(input, state) {
        if (!state) {
            input[0].classList.add('form-input-wrong')
            this.errorMessage += 'Missing input: ' + input[0].name + '\n';
        }
    }

    // sprawdzenie czy hasla sa takie same
    validatePassword(password, confirmedPassword) {
        if (password[0].value !== confirmedPassword[0].value) {
            password[0].classList.add('form-input-wrong')
            confirmedPassword[0].classList.add('form-input-wrong');
            this.errorMessage += 'Different passwords\n';
        }
    }

    // obsluga przycisku rejestracji
    async registerClicked(event) {
        event.preventDefault();
        const state = this.state;

        this.validateInputRequired(this.firstName, state.firstName);
        this.validateInputRequired(this.secondName, state.secondName);
        this.validateInputRequired(this.password, state.password);
        this.validateInputRequired(this.confirmedPassword, state.confirmedPassword);
        this.validateInputRequired(this.email, state.email);
        this.validatePassword(this.password, this.confirmedPassword);

        if (this.errorMessage !== '') {
            alert(this.errorMessage);
            this.errorMessage = '';
        }


        if (state.firstName && state.secondName && state.password && state.confirmedPassword && state.email) {
            if (state.password === state.confirmedPassword) {

                const status = await Register(this.state.firstName, this.state.secondName, this.state.password, this.state.email)

                if(status === 200){
                    AuthenticationService.loginSuccessful(this.state.email, '2', 'admin');
                    this.props.history.push('/search/');
                }else{
                    alert('Something went wrong, try again later')
                }
            }
        }
    }

    render() {
        return (
            <form className={'form'}>
                <label className={'form-label'}>{this.lang.registerComponent.firstName}</label>
                <input name={'firstName'}
                       type={'text'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={'form-input'}/>

                <label className={'form-label'}>{this.lang.registerComponent.lastName}</label>
                <input name={'secondName'}
                       type={'text'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={'form-input'}/>

                <label className={'form-label'}>{this.lang.registerComponent.password}</label>
                <input name={'password'}
                       type={'password'}
                       onChange={this.handleChange}
                       autoComplete={'off'}
                       className={'form-input'}/>

                <label className={'form-label'}>{this.lang.registerComponent.password2}</label>
                <input name={'confirmedPassword'}
                       type={'password'}
                       onChange={this.handleChange}
                       autoComplete={'off'}
                       className={'form-input'}/>

                <label className={'form-label'}>{this.lang.registerComponent.email}</label>
                <input name={'email'}
                       type={'email'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={'form-input'}/>

                <button className={'btn-blue'} onClick={this.registerClicked}>
                    {this.lang.registerComponent.register}
                </button>
            </form>
        )
    }
}

export default RegisterComponent
