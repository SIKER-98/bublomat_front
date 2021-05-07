import React, {Component} from 'react'

class ScannerComponent extends Component {
    render() {
        return (
            <div className={'content-box'}>
                <label className={'form-label'}>Choose your camera search method:</label>
                <div className={'content-box-col-2'}>
                    <button className={'btn-blue'}>QR Search</button>
                    <button className={'btn-blue'}>Barcode Search</button>
                </div>
            </div>
        )
    }
}

export default ScannerComponent;