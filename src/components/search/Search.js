import React from 'react';
import {Link} from "react-router-dom";

import './Search.css';
// import {SearchProduct} from "../../api/ApiProduct";
import ProductCard from "../productCard/ProductCard";


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


    // items = this.state.products.map(item => (
    //     <ProductCard
    //         key={item.id}
    //         name={item.name}
    //         img={item.img}
    //         description={item.description}
    //         rating={item.rating}
    //         comments={item.comments}
    //     />
    // ))

    //klikniecie przycisku wyszukiwania
    searchClick() {
        const productName = this.state.searchedProduct;
        // const products = SearchProduct(productName);
        // this.setState({products: products})

        let state1 = {
            products: [
                {
                    id: 1,
                    name: "Agresywna wiśnia",
                    img: "/img/wisnia.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id, faucibus placerat nulla. Morbi lobortis sapien nec porta finibus. Sed eu massa enim. Etiam ultricies pretium sodales. Curabitur ullamcorper dapibus gravida. Phasellus mollis dignissim gravida. Vivamus pellentesque ullamcorper malesuada. Donec quis volutpat mi.",
                    rating: 10,
                    comments: [
                        {
                            id: 1,
                            productUd: 4,
                            userId: 1,
                            rate: 8,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                        {
                            id: 2,
                            productUd: 4,
                            userId: 2,
                            rate: 7,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                        {
                            id: 3,
                            productUd: 4,
                            userId: 1,
                            rate: 6,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                    ]
                },
                {
                    id: 2,
                    name: "Bardzo agresywna wiśnia",
                    img: "/img/wisnia.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id, faucibus placerat nulla. Morbi lobortis sapien nec porta finibus. Sed eu massa enim. Etiam ultricies pretium sodales. Curabitur ullamcorper dapibus gravida. Phasellus mollis dignissim gravida. Vivamus pellentesque ullamcorper malesuada. Donec quis volutpat mi.",
                    rating: 5,
                    comments: [
                        {
                            id: 1,
                            productUd: 4,
                            userId: 1,
                            rate: 8,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                        {
                            id: 2,
                            productUd: 4,
                            userId: 2,
                            rate: 7,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                        {
                            id: 3,
                            productUd: 4,
                            userId: 1,
                            rate: 6,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                    ]
                },
                {
                    id: 3,
                    name: "Najagresywniejsza wiśnia",
                    img: "/img/wisnia.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id, faucibus placerat nulla. Morbi lobortis sapien nec porta finibus. Sed eu massa enim. Etiam ultricies pretium sodales. Curabitur ullamcorper dapibus gravida. Phasellus mollis dignissim gravida. Vivamus pellentesque ullamcorper malesuada. Donec quis volutpat mi.",
                    rating: 2,
                    comments: [
                        {
                            id: 1,
                            productUd: 4,
                            userId: 1,
                            rate: 8,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                        {
                            id: 2,
                            productUd: 4,
                            userId: 2,
                            rate: 7,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                        {
                            id: 3,
                            productUd: 4,
                            userId: 1,
                            rate: 6,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                    ]
                },
                {
                    id: 4,
                    name: "Po prostu Wasilij",
                    img: "/img/wasiluk.jpg",
                    description: "Tego nazwiska nie trzeba chyba nikomu przedstawiać. Znany podróżnik, podchorąży i lider zespołu pracującego nad bublomatem.",
                    rating: 1,
                    comments: [
                        {
                            id: 1,
                            productUd: 4,
                            userId: 1,
                            rate: 8,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                        {
                            id: 2,
                            productUd: 4,
                            userId: 2,
                            rate: 7,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                        {
                            id: 3,
                            productUd: 4,
                            userId: 1,
                            rate: 6,
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id."
                        },
                    ]
                },
            ]
        }
        this.setState({products: state1.products})
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
                                             img={product.img}
                                             comments={product.comments}
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
