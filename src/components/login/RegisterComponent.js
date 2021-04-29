import React from 'react';
import '../../style/Form.css'

class RegisterComponent extends React.Component {

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

    render() {
        return (
            <form className={'form'}>
                <label className={'form-label'}>Nickname:</label>
                <input name={'username'}
                       type={'text'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={'form-input'}/>

                <label className={'form-label'}>Password:</label>
                <input name={'password'}
                       type={'password'}
                       onChange={this.handleChange}
                       autoComplete={'off'}
                       className={'form-input'}/>

                <label className={'form-label'}>Confirm Password:</label>
                <input name={'confirmedPassword'}
                       type={'password'}
                       onChange={this.handleChange}
                       autoComplete={'off'}
                       className={'form-input'}/>

                <label className={'form-label'}>Email:</label>
                <input name={'email'}
                       type={'email'}
                       autoComplete={'off'}
                       onChange={this.handleChange}
                       className={'form-input'}/>

                <button className={'btn-blue'} onClick={this.registerClicked}>
                    Register
                </button>
            </form>
        )
    }
}

export default RegisterComponent