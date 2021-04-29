import React from 'react';
import {Link} from "react-router-dom";

import './Search.css';
// import {SearchProduct} from "../../api/ApiProduct";
import ProductCard from "../productCard/ProductCard";
import {FetchProduct, SearchProduct} from "../../api/ApiProduct";


class Search extends React.Component {
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

    comments = [
        {
            result: 8,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
        },
        {
            result: 5,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
        },
        {
            result: 3,
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
        },
    ]

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
                                <ProductCard key={product.id}
                                             name={product.name}
                                             description={product.description}
                                             rating={product.rating}
                                    // img={product.img}
                                             img={"/img/wisnia.jpg"}
                                             comments={this.comments}
                                />
                            </li>
                        )
                    )}
                </ul>

            </>
        )
    }

}

export default Search;
