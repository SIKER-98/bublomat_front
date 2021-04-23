import React from 'react';

import './ProductCard.css';
import Comment from "../comment/Comment";

class ProductCard extends React.Component {
    
    state = {
        show: false,
    }

    showProduct = () => {
        this.setState({
            show: !this.state.show,
        });
    }

    opinions = this.props.comments.map(opinion => (
        <Comment
        result={opinion.result} 
        comment={opinion.comment}
        />
    ))
    
    render() {
        return (
            <div className={`searchedElement`}>
                <img src={this.props.img} alt={`img ${this.props.name}`}/>
                <div className={'productInfo'}>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.description}</p>
                    <h2>Rating: <span>{this.props.rating}%</span></h2>
                    {this.state.show ? 
                    <div className={'comments'}>
                        <h1>Najnowsze opinie:</h1>
                        {this.opinions}
                    </div>
                    : ""}
                    <button className={`showProduct`} onClick={this.showProduct}>{this.state.show ? `Hide reviews` : "Show reviews"}</button>
                </div>
            </div>
        )
    }
}

export default ProductCard;
