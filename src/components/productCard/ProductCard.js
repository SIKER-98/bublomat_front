import React from 'react';

import './ProductCard.css';

class ProductCard extends React.Component {
    render() {
        return (
            <div className={'searchedElement'}>
                <img src={this.props.img} alt={`img ${this.props.name}`}/>
                <div className={'productInfo'}>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.description}</p>
                    <h2>Rating: <span>{this.props.rating}%</span></h2>
                </div>
            </div>
        )
    }
}

export default ProductCard;
