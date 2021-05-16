import React from 'react';
import './Home.css';
import {FetchProduct} from "../../api/ApiProduct";
import {FetchComments} from "../../api/ApiComment";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: 0,
            comments: 0,
            bubels: 0,
            good: 0,
            nice: 0,
            ratio: 0,
        }

        this.makeStatistics = this.makeStatistics.bind(this);
    }

    componentDidMount() {
        this.makeStatistics()
    }

    async makeStatistics() {
        const products = await FetchProduct();
        this.setState({products: products.length});

        const comments = await FetchComments();
        this.setState({comments: comments.length});

        let bubels = 0;
        let good = 0;
        let nice = 0;

        products.forEach((product) => {
            let productComments = comments.filter(comment => comment.idProduct === product.id)

            let sum = 0;
            let count = 0;

            productComments.forEach(comment => {
                sum += comment.rate;
                count++;
            })
            const average = sum / count;


            if (average <= 4) bubels++;
            else if (average <= 7) good++;
            else nice++;
        })

        this.setState({bubels: bubels});
        this.setState({good: good});
        this.setState({nice: nice});

        const ratio = this.state.comments / this.state.products;
        this.setState({ratio: ratio.toFixed(2)});
    }


    render() {
        return (
            <div className={'home'}>
                <div className={'statistic-box'}>Quantity of all products: <span>{this.state.products}</span></div>
                <div className={'statistic-box'}>Number of all comments: <span>{this.state.comments}</span></div>
                <div className={'statistic-box'}>Number of products recognized as bubbles: <span>{this.state.bubels}</span></div>
                <div className={'statistic-box'}>Number of products recognized as good: <span>{this.state.good}</span></div>
                <div className={'statistic-box'}>Number of products recognized as super: <span>{this.state.nice}</span></div>
                <div className={'statistic-box'}>The ratio of posts to comments: <span>{this.state.ratio}</span></div>
            </div>
        )
    }
}

export default HomeComponent;
