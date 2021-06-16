import React, {Component} from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import './Barcode.css'
import lang from "../../languagePack";

class ScannerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: '--EMPTY--',
        }

        this.searchClick=this.searchClick.bind(this)
        this.lang = lang.getLang()
    }

    catchBarCode(err, result) {
        if (result) {
            this.setState({barcode: result.text})
        }
    }

    searchClick(){
        if(this.state.barcode==='--EMPTY--'){
            return
        }

        this.props.history.push(`/search/${this.state.barcode}`)
    }

    render() {
        return (
            <div className={'content-box'}>
                <h1>{this.lang.scannerComponent.barcode}{this.state.barcode}</h1>
                <div className={'barcode-scanner'}>
                    <BarcodeScannerComponent width={'100%'}
                                             height={'100%'}
                                             onUpdate={(err, result) => this.catchBarCode(err, result)}
                    />
                </div>

                <button className={'btn-blue'}
                onClick={()=>this.searchClick()}
                >
                    {this.lang.scannerComponent.search}
                </button>
            </div>
        )
    }
}

export default ScannerComponent;
