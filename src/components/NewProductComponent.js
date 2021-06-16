import React from 'react';

import ProductModel from "../models/ProductModel";
import {AddProduct} from "../api/ApiProduct";
import axios from "../api/axiosHelper";
import FormData from 'form-data'
import lang from "../languagePack";

class NewProductComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: '',
            productName: '',
            description: '',
            imageSource: '',
            image: './logo192.png',

            imageId: 0,

            photo: '',
            file: null,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.makeProduct = this.makeProduct.bind(this);
        this.uploadImage = this.uploadImage.bind(this);

        this.lang = lang.getLang()
    }

    async handleChangeImage(event) {
        if (event.target.files.length !== 0) {
            this.setState({imageSource: event.target.files[0]})
            this.setState({image: URL.createObjectURL(event.target.files[0])})
        } else {
            this.setState({imageSource: '/logo192.png'})
            this.setState({image: '/logo192.png'})
        }

    }

    async uploadImage() {
        let formdata = new FormData()
        formdata.append('image', this.state.imageSource)

        await axios.post('/photo/add', formdata, {params: {title: 'test1'}})
            .then(res => {
                const imageId = res.data.replace('redirect:/photos/', '')
                this.setState({imageId: imageId})
                console.log('ImageUpload: ', imageId)
            })
            .catch(e => {
                console.log('Problem with image upload')
            })
    }

    // przechwytywanie zmian w polach
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // stworzenie instakcji produktu
    makeProduct() {
        let product = new ProductModel();
        product.id = 0;
        product.productName = this.state.productName;
        product.description = this.state.description;
        product.img = this.state.imageId;
        product.barcode = this.state.barcode
        product.rating = 0

        return product;
    }

    verifyInputs() {
        let message = '';
        // if (!this.state.barcode)
        //     message += 'Barcode empty!\n';
        if (!this.state.productName)
            message += 'Product name empty!\n';
        if (!this.state.description)
            message += 'Description empty!\n';

        return message
    }

    async addProduct(e) {
        e.preventDefault()

        let message = this.verifyInputs()
        if (message) {
            alert(message);
            return
        }

        await this.uploadImage()
        let product = this.makeProduct();

        if (this.state.imageId === 0) {
            alert('No image selected')
            return
        }

        let responseCode = AddProduct(product);

        const pointer = this;

        responseCode.then(function (result) {
            if (result === 200) {
                // alert('Product added!')
                console.log('Product added: ', product)
                pointer.props.history.push(`/search/`)
            } else {
                alert('Catching problem! Try again');
            }
        })
    }

    clearImage() {
        this.setState({imageSource: '/logo192.png'})
        this.setState({image: '/logo192.png'})
    }

    render() {
        return (
            <div className={'content-box'}>
                <div className={'content-box-col-2'}>
                    <div>
                        <img src={this.state.image}
                             alt={'test'}
                             className={'form-image'}/>
                        <div>
                            <p>{this.lang.newProductComponent.filename}{this.state.imageSource.name}</p>
                            <p>{this.lang.newProductComponent.filetype}{this.state.imageSource.type}</p>
                            <p>{this.lang.newProductComponent.size}{this.state.imageSource.size}</p>
                        </div>

                        <input type={'file'}
                               name={'imageSource'}
                               id={'file'}
                               className={'form-input-file'}
                               onChange={(e) => this.handleChangeImage(e)}/>
                        <label htmlFor={'file'}
                               className={'btn-blue'}>{this.lang.newProductComponent.selectFile}</label>
                        <button className={'btn-blue'}
                                onClick={() => this.clearImage()}
                        >
                            {this.lang.newProductComponent.clearImage}
                        </button>
                    </div>

                    <div className={''}>
                        <form className={'form'}>
                            <label className={'form-label'}>{this.lang.newProductComponent.barcode}</label>
                            <input type={'number'} name={'barcode'}
                                   autoComplete={'off'}
                                   onChange={this.handleChange}
                                   className={'form-input'}/>

                            <label className={'form-label'}>{this.lang.newProductComponent.name}</label>
                            <input type={'text'} name={'productName'}
                                   autoComplete={'off'}
                                   onChange={this.handleChange}
                                   className={'form-input'}/>

                            <label className={'form-label'}>{this.lang.newProductComponent.description}</label>
                            <textarea cols={'30'} rows={'5'}
                                      name={'description'}
                                      autoComplete={'off'}
                                      onChange={this.handleChange}
                                      className={'form-textArea'}/>

                            <button className={'btn-blue'}
                                    onClick={this.addProduct}>
                                {this.lang.newProductComponent.addProduct}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }


}

export default NewProductComponent;
