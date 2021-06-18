import React from 'react';
import lang from "../languagePack";
import SendEmail from "../api/ApiContact";

class ContactComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            mail: '',
            message: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.sendEmailClick = this.sendEmailClick.bind(this);

        this.lang = lang.getLang()
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    async sendEmailClick(event) {
        event.preventDefault();

        let message = '';

        if (!this.state.title)
            message += 'Empty Title!\n'

        if (!this.state.mail)
            message += 'Empty mail!\n';

        if (!this.state.message)
            message += 'Empty message!\n';


        if (!message) {
            let status = await SendEmail(this.state.mail, this.state.title, this.state.message)
            alert('Message send')
            this.setState({title:'',mail:'',message:''})
        } else {
            alert(message);
        }

    }


    render() {
        return (
            <>
                <div className={'content-box'}>
                    <div className={'content-box-col-2'}>
                        <div>
                            <label className={'form-label'}>{this.lang.contactComponent.title}</label>
                            <input name={'title'} className={'form-input'} onChange={this.handleChange}/>
                        </div>

                        <div>
                            <label className={'form-label'}>{this.lang.contactComponent.mail}</label>
                            <input name={'mail'} className={'form-input'} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <label className={'form-label'}>{this.lang.contactComponent.message}</label>
                    <textarea name={'message'} cols={'30'} rows={'5'} className={'form-textArea'}
                              onChange={this.handleChange}/>

                    <button className={'btn-blue'}
                            onClick={this.sendEmailClick}>{this.lang.contactComponent.send}</button>
                </div>

            </>
        )
    }
}

export default ContactComponent;
