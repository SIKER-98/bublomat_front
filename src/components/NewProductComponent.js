import React from 'react';

import ProductModel from "../models/ProductModel";
import {AddProduct} from "../api/ApiProduct";
import axios from "../api/axiosHelper";
import FormData from 'form-data'

class NewProductComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: -1,
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
        product.id = this.state.barcode;
        product.productName = this.state.productName;
        product.description = this.state.description;
        product.img = this.state.imageId;
        product.rating = 0

        return product;
    }

    verifyInputs() {
        let message = '';
        if (!this.state.barcode)
            message += 'Barcode empty!\n';
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
                            <p>Filename: {this.state.imageSource.name}</p>
                            <p>Filetype: {this.state.imageSource.type}</p>
                            <p>Size in bytes: {this.state.imageSource.size}</p>
                        </div>

                        <input type={'file'}
                               name={'imageSource'}
                               id={'file'}
                               className={'form-input-file'}
                               onChange={(e) => this.handleChangeImage(e)}/>
                        <label htmlFor={'file'}
                               className={'btn-blue'}>Select file</label>
                        <button className={'btn-blue'}
                                onClick={() => this.clearImage()}
                        >
                            Clear image
                        </button>
                    </div>

                    <div className={''}>
                        <form className={'form'}>
                            <label className={'form-label'}>Barcode:</label>
                            <input type={'number'} name={'barcode'}
                                   autoComplete={'off'}
                                   onChange={this.handleChange}
                                   className={'form-input'}/>

                            <label className={'form-label'}>Name:</label>
                            <input type={'text'} name={'productName'}
                                   autoComplete={'off'}
                                   onChange={this.handleChange}
                                   className={'form-input'}/>

                            <label className={'form-label'}>Description:</label>
                            <textarea cols={'30'} rows={'5'}
                                      name={'description'}
                                      autoComplete={'off'}
                                      onChange={this.handleChange}
                                      className={'form-textArea'}/>

                            <button className={'btn-blue'}
                                    onClick={this.addProduct}>
                                Add product
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }


}

export default NewProductComponent;
