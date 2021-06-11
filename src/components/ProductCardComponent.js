import '../style/ProductCard.css';
import React, {Component} from "react";
import {AddComment, ProductComments} from "../api/ApiComment";
import CommentModel from "../models/CommentModel";
import axios from "../api/axiosHelper";

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
            commentsInMemory: [],
            commentsPage: 1,
            maxCommentsPage: 0,

            photoId: props.img,
            photo: ''
        }

        this.toggleProductsClick = this.toggleProductsClick.bind(this)
        this.hoverNumber = this.hoverNumber.bind(this)
        this.numberClick = this.numberClick.bind(this)
        this.addComment = this.addComment.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.getComments = this.getComments.bind(this)
        this.calculateRate = this.calculateRate.bind(this)
        this.moreComments = this.moreComments.bind(this)
        this.download = this.download.bind(this)
    }

     componentDidMount() {
         this.download()
        this.getComments().then(r => {
            // console.log(`Comments received to product ${this.props.id}`)
        });
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

        const maxPage = Math.ceil(comments.length / 5);

        this.setState({
            maxCommentsPage: maxPage,
            commentsInMemory: comments.slice(0, 5),
            comments: comments
        })
    }


    // pokazanie lub schowanie komentarzy
    toggleProductsClick() {
        this.getComments().then(() => this.setState({showComments: !this.state.showComments,}))
        this.setState({commentsPage: 0})
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

    async download() {
        await axios.get(`/photo/${this.state.photoId}`)
            .then(res => {
                this.setState({photo: res.data})
            })
            .catch(e => {
                console.log(e)
            })


    }

    numberClick(event) {
        const number = event.target;

        if (this.state.rateRef != null) {
            let rateRef = this.state.rateRef;
            rateRef.className = 'rating-number';
            this.setState({rateRef: rateRef});
        }

        this.setState({
            userRate: number.innerHTML * 1,
            rateRef: number,
        })

        number.className = `rating-number rating-${number.innerHTML}`;
    }

    moreComments() {
        const comments = this.state.comments;
        const page = (this.state.commentsPage + 1) % this.state.maxCommentsPage;

        this.setState({
            commentsPage: (this.state.commentsPage + 1) % this.state.maxCommentsPage,
            commentsInMemory: comments.slice((page) * 5, (page + 1) * 5)
        });
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

                {
                    this.state.photo !== '' &&
                <img src={`data:image/png;base64,${this.state.photo}`} alt={`img ${this.props.name}`}/>
                }

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
                            {this.state.commentsInMemory.map((comment) => (
                                <li key={comment.commentId}>
                                    <h2 className={this.setRatingColour(comment.rate)}>Rate: {comment.rate}</h2>
                                    <p>{comment.content}</p>
                                </li>
                            ))}
                        </ul>

                        {this.state.comments.length >= 5 &&
                        <div className={'flex-center'}>
                            <button className={'btn-blue'}
                                    onClick={this.moreComments}>
                                Load more comments
                            </button>
                        </div>}
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
            console.log(sessionStorage.getItem('userId'))
            console.log(this.props)


            let newComment = new CommentModel(sessionStorage.getItem('userId'), this.props.id);
            newComment.content = this.state.userComment;
            newComment.rate = this.state.userRate;
            console.log('newComment: ')
            console.log(newComment)

            AddComment(newComment).then(() => this.getComments());
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
}


export default ProductCardComponent;


// <button onClick={() => this.download()}>DOWNLOAD</button>
// {this.state.photo}


// download() {
//     axios.get('/photo/60bfdd6b22dc8a5f3fd3cc34')
//         .then(res => {
//             console.log(res)
//             this.setState({photo: res.data})
//         })
//         .catch(e => {
//             console.log(e)
//         })
//
//
// }
