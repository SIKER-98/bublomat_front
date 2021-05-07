import React from 'react';
import {Link} from "react-router-dom";

import '../style/Search.css';

import ProductCardComponent from "./ProductCardComponent";
import {FetchProduct, SearchProduct} from "../api/ApiProduct";


class SearchComponent extends React.Component {
    constructor(props) {
        super(props);

        if (!this.props.match.params.productName)
            this.props.match.params.productName = '';

        this.state = {
            searchedProduct: this.props.match.params.productName,
            products: [],
        }

        this.searchClick = this.searchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //klikniecie przycisku wyszukiwania
    async searchClick() {
        const productName = this.state.searchedProduct;

        let products = []
        if (productName) {
            products = await SearchProduct(productName);
        } else {
            products = await FetchProduct();
        }

        this.setState({products: products})
    }

    // obsluga wprowadzania w pola
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <>
                <div className={'content-box'}>
                    <label className={'form-label'}>Input product name or code:</label>
                    <input name={'searchedProduct'}
                           value={this.state.searchedProduct}
                           onChange={this.handleChange}
                           className={'form-input'}/>

                    <div className={'content-box-col-2'}>
                        <button className={'btn-blue flex-button'}
                                onClick={this.searchClick}>Search
                        </button>
                        <Link className={'btn-blue flex-button'}
                              to={'/newProduct'}>
                            Add new Product
                        </Link>
                    </div>
                </div>

                <ul>
                    {this.state.products.map((product, i) => (
                            <li key={i} className={'content-box'}>
                                <ProductCardComponent key={product.id}
                                                      id={product.id}
                                                      name={product.productName}
                                                      description={product.description}
                                                      rating={product.rating}
                                                      img={"/img/wisnia.jpg"}
                                />
                            </li>
                        )
                    )}
                </ul>

            </>
        )
    }

}

export default SearchComponent;
