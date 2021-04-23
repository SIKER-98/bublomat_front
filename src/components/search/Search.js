import React from 'react';

import './Search.css';
import ProductCard from "../productCard/ProductCard";

class Search extends React.Component {

    state = {
        products: [
            {
                id: 1,
                name: "Agresywna wiśnia",
                img: "img/wisnia.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id, faucibus placerat nulla. Morbi lobortis sapien nec porta finibus. Sed eu massa enim. Etiam ultricies pretium sodales. Curabitur ullamcorper dapibus gravida. Phasellus mollis dignissim gravida. Vivamus pellentesque ullamcorper malesuada. Donec quis volutpat mi.",
                rating: 10,
                comments: [
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
            },
            {
                id: 2,
                name: "Bardzo agresywna wiśnia",
                img: "img/wisnia.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id, faucibus placerat nulla. Morbi lobortis sapien nec porta finibus. Sed eu massa enim. Etiam ultricies pretium sodales. Curabitur ullamcorper dapibus gravida. Phasellus mollis dignissim gravida. Vivamus pellentesque ullamcorper malesuada. Donec quis volutpat mi.",
                rating: 20,
                comments: [
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
            },
            {
                id: 3,
                name: "Najagresywniejsza wiśnia",
                img: "img/wisnia.jpg",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci ante, congue id nisi id, faucibus placerat nulla. Morbi lobortis sapien nec porta finibus. Sed eu massa enim. Etiam ultricies pretium sodales. Curabitur ullamcorper dapibus gravida. Phasellus mollis dignissim gravida. Vivamus pellentesque ullamcorper malesuada. Donec quis volutpat mi.",
                rating: 35,
                comments: [
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
            },
            {
                id: 4,
                name: "Po prostu Wasilij",
                img: "img/wasiluk.jpg",
                description: "Tego nazwiska nie trzeba chyba nikomu przedstawiać. Znany podróżnik, podchorąży i lider zespołu pracującego nad bublomatem.",
                rating: 80,
                comments: [
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
            },
        ]
    }

    items = this.state.products.map(item => (
        <ProductCard 
        key={item.id}
        name={item.name}
        img={item.img}
        description={item.description}
        rating={item.rating}
        comments={item.comments}
        />
    ))

    render() {
        return (
            <div className={'searchWrapper'}>
                <div className={'searcher'}>
                    <label className={'searchLabel'}>Input product name or code:</label>
                    <input className={'searchInput'}/>

                    <div className={'searchButtons'}>
                        <button>Search</button>
                        <button>Add new Product</button>
                    </div>
                </div>


                <div className={'productList'}>
                    {this.items}
                </div>
            </div>
        )
    }

}

export default Search;
