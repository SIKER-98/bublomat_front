import React, {Component} from 'react'
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

class ScannerComponent extends Component {
    render() {
        return (
            <div className={'content-box'}>
                <label className={'form-label'}>Choose your camera search method:</label>
                <div className={'content-box-col-2'}>
                    <Link to={'/qrScanner'}
                          className={'btn-blue'}>
                        QR Search
                    </Link>
                    <Link to={'/barcodeScanner'}
                          className={'btn-blue'}
                    >
                        Barcode Search
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(ScannerComponent);
