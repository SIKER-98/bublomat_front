import React from 'react';

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
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    sendEmailClick(event) {
        event.preventDefault();

        let message = '';

        if (!this.state.title)
            message += 'Empty Title!\n'

        if (!this.state.mail)
            message += 'Empty mail!\n';

        if (!this.state.message)
            message += 'Empty message!\n';

        if (!message) {
            alert('Send message')
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
                            <label className={'form-label'}>Title:</label>
                            <input name={'title'} className={'form-input'} onChange={this.handleChange}/>
                        </div>

                        <div>
                            <label className={'form-label'}>Your mail:</label>
                            <input name={'mail'} className={'form-input'} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <label className={'form-label'}>Your message:</label>
                    <textarea name={'message'} cols={'30'} rows={'5'} className={'form-textArea'} onChange={this.handleChange}/>

                    <button className={'btn-blue'} onClick={this.sendEmailClick}>SEND MESSAGE</button>
                </div>

            </>
        )
    }
}

export default ContactComponent;