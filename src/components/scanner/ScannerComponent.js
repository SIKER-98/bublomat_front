import React, {Component} from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import './Barcode.css'

class ScannerComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: '--EMPTY--',
        }

        this.searchClick=this.searchClick.bind(this)
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
                <h1>Barcode: {this.state.barcode}</h1>
                <div className={'barcode-scanner'}>
                    <BarcodeScannerComponent width={'100%'}
                                             height={'100%'}
                                             onUpdate={(err, result) => this.catchBarCode(err, result)}
                    />
                </div>

                <button className={'btn-blue'}
                onClick={()=>this.searchClick()}
                >
                    Search product
                </button>
            </div>
        )
    }
}

export default ScannerComponent;
