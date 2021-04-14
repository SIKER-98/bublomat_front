import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className={'contact'}>

                <div className={'contactTitle'}>
                    <label>Title:</label>
                    <input className={'contactInput'}/>
                </div>

                <div className={'contactMail'}>
                    <label>Your mail:</label>
                    <input className={'contactInput'}/>
                </div>

                <div className={'contactText'}>
                    <label>Your message:</label>
                    <textarea name={'contactMessage'} cols={'30'} rows={'5'} className={'contactInput'}/>
                </div>

                <button className={'contactButton'}>Send message</button>

            </div>
        )
    }
}

export default Contact;