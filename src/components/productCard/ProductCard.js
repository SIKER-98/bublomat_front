import React from 'react';

import './ProductCard.css';
import CommentComponent from "../comment/CommentComponent";
import {logDOM} from "@testing-library/react";

class ProductCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showComments: false
        }

        this.toggleProductsClick = this.toggleProductsClick.bind(this)
    }

    // pokazanie lub schowanie komentarzy
    toggleProductsClick() {
        this.setState({showComments: !this.state.showComments,});
    }

    setRatingColour(rating) {
        if (rating <= 4)
            return 'colour-red';
        else if (rating <= 7)
            return 'colour-orange';
        else
            return 'colour-green';
    }

    render() {
        return (
            <div className={`searchedElement`}>
                <img src={this.props.img} alt={`img ${this.props.name}`}/>

                <h1>{this.props.name}</h1>
                <p className={'paragraph-justify'}>{this.props.description}</p>
                <h2 className={this.setRatingColour(this.props.rating)}>Rating: {this.props.rating}</h2>

                {this.state.showComments &&
                <>
                    <h1>Najnowsze opinie:</h1>
                    <ul>
                        {this.props.comments.map((comment, i) => (
                            <li key={i}>
                                <h2 className={this.setRatingColour(comment.rate)}>Rate: {comment.rate}</h2>
                                <p>{comment.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
                }

                <button className={`showProduct`}
                        onClick={this.toggleProductsClick}>
                    {this.state.showComments ? `Hide reviews` : "Show reviews"}
                </button>
            </div>
        )
    }

}


export default ProductCard;
