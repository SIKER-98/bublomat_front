import React from 'react';
import {Link} from "react-router-dom";

import '../style/Search.css';

import ProductCardComponent from "./ProductCardComponent";
import {FetchProduct, GetProductByBarcode, SearchProduct} from "../api/ApiProduct";


class SearchComponent extends React.Component {
    constructor(props) {
        super(props);

        if (!this.props.match.params.productName)
            this.props.match.params.productName = '';

        this.state = {
            searchedProduct: this.props.match.params.productName,
            selectedPage: 0,
            productsInMemory: [],
            products: [],
        }

        this.searchClick = this.searchClick.bind(this);
        this.barcodeClick = this.barcodeClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderPageButtons = this.renderPageButtons.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.scrollTo(0, 0);
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

        this.setState({productsInMemory: products.slice(0, 5)})
        this.setState({products: products})
    }

    //klikniecie przycisku wyszukiwania
    async barcodeClick() {
        const productName = this.state.searchedProduct;

        let products = []
        if (productName) {
            products = await GetProductByBarcode(productName);
        } else {
            products = await FetchProduct();
        }

        this.setState({productsInMemory: products.slice(0, 5)})
        this.setState({products: products})
    }

    // obsluga wprowadzania w pola
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    changePage(pageButton) {
        const pageNumber = pageButton.pageNumber;

        this.setState({selectedPage: pageNumber})
        this.setState({productsInMemory: this.state.products.slice(5 * pageNumber, 5 * (pageNumber + 1))})
    }

    renderPageButtons() {
        const pageCount = Math.ceil(this.state.products.length / 5);

        let buttons = [];
        for (let i = 0; i < pageCount; i++) {
            buttons.push(
                <button className={this.state.selectedPage === i ? 'btn-page-active' : 'btn-page'}
                        key={i}
                        onClick={() => this.changePage({pageNumber: i})}
                        name={i}>
                    {i + 1}
                </button>)
        }

        return buttons;
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

                    <div className={'content-vertical'}>
                        <button className={'btn-blue '}
                                onClick={this.searchClick}>Search by name
                        </button>
                        <button className={'btn-blue '}
                                onClick={this.barcodeClick}>Search by Barcode
                        </button>

                        <Link className={'btn-blue '}
                              to={'/newProduct'}>
                            Add new Product
                        </Link>
                    </div>
                </div>

                <ul>
                    {this.state.productsInMemory.map((product, i) => (
                            <li key={i} className={'content-box'}>
                                <ProductCardComponent key={product.id}
                                                      id={product.id}
                                                      name={product.productName}
                                                      description={product.description}
                                                      rating={product.rating}
                                                      img={product.img}
                                />
                            </li>
                        )
                    )}
                </ul>

                {
                    this.state.products.length >= 5 &&
                    <div className={'page-list'}>
                        {this.renderPageButtons()}
                    </div>
                }
            </>
        )
    }

}

export default SearchComponent;
