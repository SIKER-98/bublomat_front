import React from 'react';
import './Footer.css';

// stopka uzywana domyslnie na kazdej stronie

class Footer extends React.Component {
    render() {
        return (
            <footer className={"footer"}>
                <p>Strona stworzona przez zespół pchorów.</p>
            </footer>
        )
    }
}

export default Footer;