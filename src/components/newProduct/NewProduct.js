import React from 'react';

import './FileButton.css';
import ProductModel from "../../models/ProductModel";
import {AddProduct} from "../../api/ApiProduct";

class NewProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            barcode: -1,
            name: '',
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
        }else{
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
        product.productName = this.state.name;
        product.description = this.state.description;
        product.img = this.state.imageSource;
        product.rating = 0

        return product;
    }

    addProduct() {
        let product = this.makeProduct();
        // AddProduct(product);

        this.props.history.push(`/search/${this.state.name}`);
    }

    render() {
        return (
            <div className={'content-box'}>
                <div className={'content-box-col-2'}>
                    <div>
                        <img src={this.state.image}
                             alt={'test'}
                             className={'testImage'}/>
                        <input type={'file'} name={'imageSource'}
                               className={'custom-file-input'}
                               onChange={this.handleChangeImage}/>
                        <div>
                            <p>Filename: {this.state.imageSource.name}</p>
                            <p>Filetype: {this.state.imageSource.type}</p>
                            <p>Size in bytes: {this.state.imageSource.size}</p>
                        </div>
                    </div>

                    <div className={''}>
                        <form className={'form'}>
                            <label className={'form-label'}>Barcode:</label>
                            <input type={'text'} name={'barcode'}
                                   autoComplete={'off'}
                                   onChange={this.handleChange}
                                   className={'form-input'}/>

                            <label className={'form-label'}>Name:</label>
                            <input type={'text'} name={'name'}
                                   autoComplete={'off'}
                                   onChange={this.handleChange}
                                   className={'form-input'}/>

                            <label className={'form-label'}>Description:</label>
                            <textarea cols={'30'} rows={'5'}
                                      name={'description'}
                                      autoComplete={'off'}
                                      onChange={this.handleChange}
                                      className={'contactInput'}/>

                            <button className={'btn-blue'}
                                    onClick={this.addProduct}>Add product
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }


}

export default NewProduct;
