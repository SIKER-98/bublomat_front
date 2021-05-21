import React, {Component} from 'react';
import Keycloak from "keycloak-js";

class Secured extends Component {
    constructor(props) {
        super(props);
        this.state = {keycloak: null, authenticated: false};
    }

    componentDidMount() {
        const keycloak = Keycloak('/keycloak.json');
        keycloak.init({onLoad: 'login-required'}).then(authenticated => {
            this.setState({keycloak: keycloak, authenticated: authenticated})
            if (authenticated) {
                window.accessToken = keycloak.token;
            }
        })
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) return (
                <div>test passed</div>
            ) else {
                return (
                    <div>test failed</div>
                )
            }
            return (
                <div>initializing</div>
            )
        }
    }
}

export default Secured;