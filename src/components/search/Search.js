import React from 'react';

import './Search.css';
import ProductCard from "../productCard/ProductCard";

class Search extends React.Component {
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
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        )
    }

}

export default Search;