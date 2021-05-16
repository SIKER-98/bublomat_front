import React from 'react';

import ProductModel from "../models/ProductModel";
import {AddProduct} from "../api/ApiProduct";

class NewProductComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: -1,
            productName: '',
            description: '',
            imageSource: '',
            image: './logo192.png'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.makeProduct = this.makeProduct.bind(this);
    }

    handleChangeImage(event) {
        console.log(event.target.files)

        if (event.target.files.length !== 0) {
            this.setState({imageSource: event.target.files[0]})
            this.setState({image: URL.createObjectURL(event.target.files[0])})
        } else {
            this.setState({imageSource: '/logo192.png'})
            this.setState({image: '/logo192.png'})
        }
        // do wysylania
        // const formData = new FormData();
        // formData.append('file',this.state.imageSource,);
        //
        // console.log(formData);
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
        product.img = this.state.imageSource;
        product.rating = 0

        return product;
    }

    addProduct(e) {
        e.preventDefault()

        let message = '';

        if (!this.state.barcode)
            message += 'Barcode empty!\n';

        if (!this.state.productName)
            message += 'Product name empty!\n';

        if (!this.state.description)
            message += 'Description empty!\n';

        if (message) {
            alert(message);
        } else {
            let product = this.makeProduct();
            let responseCode = AddProduct(product);

            const pointer = this;

            responseCode.then(function (result){
                if (result === 200) {
                    alert('Product added!')
                    pointer.props.history.push(`/search/`)
                } else {
                    alert('Catching problem! Try again');
                }
            })

        }
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
                               onChange={this.handleChangeImage}/>
                        <label htmlFor={'file'}
                               className={'btn-blue'}>Select file</label>
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
