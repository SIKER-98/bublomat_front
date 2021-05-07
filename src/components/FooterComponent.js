import React from 'react';
import '../style/Footer.css';

// stopka uzywana domyslnie na kazdej stronie

class FooterComponent extends React.Component {
    render() {
        return (
            <footer className={"footer"}>
                <p>Strona stworzona przez zespół pchorów.</p>
            </footer>
        )
    }
}

export default FooterComponent;