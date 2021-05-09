import '../style/ProductCard.css';
import React, {Component} from "react";
import {AddComment, ProductComments} from "../api/ApiComment";
import CommentModel from "../models/CommentModel";

class ProductCardComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productRate: 0,
            showComments: false,
            userRate: -1,
            userComment: '',
            rateRef: null,
            comments: [],
        }

        this.toggleProductsClick = this.toggleProductsClick.bind(this)
        this.hoverNumber = this.hoverNumber.bind(this)
        this.numberClick = this.numberClick.bind(this)
        this.addComment = this.addComment.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getComments = this.getComments.bind(this)
        this.calculateRate = this.calculateRate.bind(this)
    }

    componentDidMount() {
        this.getComments();
    }

    calculateRate(comments) {
        let count = 0;
        let sum = 0;
        comments.map(comment => {
            sum += comment.rate;
            count++;
            return comment;
        })

        let rate = count === 0 ? 0 : sum / count;

        this.setState({productRate: rate.toFixed(2)})
    }

    async getComments() {
        let comments = await ProductComments(this.props.id);
        this.calculateRate(comments);
        this.setState({comments: comments});
    }


    // pokazanie lub schowanie komentarzy
    toggleProductsClick() {
        this.getComments().then(() => this.setState({showComments: !this.state.showComments,}))

    }

    setRatingColour(rating) {
        rating = rating * 1
        if (rating <= 4)
            return 'colour-red';
        else if (rating <= 7)
            return 'colour-orange';
        else
            return 'colour-green';
    }


    hoverNumber(event, isHover) {
        const number = event.target;

        if (this.state.userRate !== number.innerHTML * 1)
            if (isHover) {
                number.className = `rating-number rating-${number.innerHTML}`;
            } else {
                number.className = 'rating-number';
            }
    }

    numberClick(event) {
        const number = event.target;

        if (this.state.rateRef != null) {
            let rateRef = this.state.rateRef;
            rateRef.className = 'rating-number';
            this.setState({rateRef: rateRef});
        }

        this.setState({userRate: number.innerHTML * 1})
        this.setState({rateRef: number});

        number.className = `rating-number rating-${number.innerHTML}`;
    }

    ratingRender() {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        return numbers.map((number) => {
            return (
                <li className={'rating-number'} key={number}
                    onMouseEnter={(event) => this.hoverNumber(event, true)}
                    onMouseLeave={(event) => this.hoverNumber(event, false)}
                    onClick={this.numberClick}
                >
                    {number}
                </li>
            )
        })
    }

    render() {

        return (

            <div className={`searchedElement`}>
                <img src={this.props.img} alt={`img ${this.props.name}`}/>

                <h1>{this.props.name}</h1>
                <p className={'paragraph-justify'}>{this.props.description}</p>
                <h2 className={this.setRatingColour(this.state.productRate)}>Rating: {this.state.productRate}</h2>

                <h2>Your rating</h2>
                <div className={'star'}>
                    <ul className={'rating-numbers'}>
                        {this.ratingRender()}
                    </ul>
                </div>

                <textarea name={'userComment'} rows={'5'} cols={'30'} className={'form-textArea'}
                          onChange={this.handleChange}/>

                <div className={'content-box-col-2'}>
                    <button className={'btn-blue'}
                            onClick={this.addComment}>
                        Add comment
                    </button>
                    <button className={`btn-blue`}
                            onClick={this.toggleProductsClick}>
                        {this.state.showComments ? `Hide reviews` : "Show reviews"}
                    </button>
                </div>

                {
                    this.state.showComments &&
                    <>
                        <h1>Latest comments:</h1>
                        <ul>
                            {this.state.comments.map((comment) => (
                                <li key={comment.commentId}>
                                    <h2 className={this.setRatingColour(comment.rate)}>Rate: {comment.rate}</h2>
                                    <p>{comment.content}</p>
                                </li>
                            ))}
                        </ul>

                    </>
                }
            </div>
        )
    }

    addComment() {
        let message = '';
        if (this.state.userRate < 0) {
            message += 'Chose your rate!\n';
        }

        if (this.state.userComment === '') {
            message += 'Write your expression about product!\n';
        }

        if (message !== '') {
            alert(message);
        } else {
            //wyslanie do api
            let newComment = new CommentModel(sessionStorage.getItem('userId'), this.props.id);
            newComment.content = this.state.userComment;
            newComment.rate = this.state.userRate;

            AddComment(newComment).then(() => this.getComments());
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
}


export default ProductCardComponent;