import React from 'react';
import '../style/Footer.css';
import lang from '../languagePack'

// stopka uzywana domyslnie na kazdej stronie

class FooterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: '/img/pl-icon.webp'
        }

        this.lang = lang.getLang()
        this.changeLang=this.changeLang.bind(this)
    }

    componentDidMount() {
        const l = sessionStorage.getItem('lang')
        if (l === 'pl')
            this.setState({icon: '/img/en-icon.png'})
        else
            this.setState({icon: '/img/pl-icon.webp'})
    }

    changeLang(event) {
        event.preventDefault()

        const l = sessionStorage.getItem('lang')

        if (l === 'pl')
            sessionStorage.setItem('lang', 'en')
        else
            sessionStorage.setItem('lang', 'pl')

        window.location.reload()
    }

    render() {
        return (
            <footer className={"footer"}>
                <p>{this.lang.footer.desc}</p>
                <button className={'lang-button'}
                        onClick={(e) => this.changeLang(e)}
                >
                    {<img src={this.state.icon} alt=""/>}
                </button>
            </footer>
        )
    }
}

export default FooterComponent;
