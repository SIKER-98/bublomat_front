import React from 'react';
import './Home.css';
import {FetchProduct} from "../../api/ApiProduct";
import {FetchComments} from "../../api/ApiComment";

class Home extends React.Component {
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

        products.map((product) => {
            let productComments = comments.filter(comment => comment.idProduct === product.id)

            let sum = 0;
            let count = 0;

            productComments.map(comment => {
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
                <p>products: {this.state.products}</p>
                <p>comments: {this.state.comments}</p>
                <p>bubels: {this.state.bubels}</p>
                <p>good: {this.state.good}</p>
                <p>nice: {this.state.nice}</p>
                <p>ratio: {this.state.ratio}</p>

                <div className={'homeBox'}>Total number of all BUBLES in our
                    database: <span>{this.state.products}</span></div>
                <div className={'homeBox'}>Total number of all products: <span>5401</span></div>
                <div className={'homeBox'}>Number of new products added to the database today: <span>13</span></div>
                <div className={'homeBox'}>Number of user reviews: <span>51321</span></div>
                <div className={'homeBox'}>Testowy tekst przeznaczony do prezentacji kontenerów</div>
                <div className={'homeBox'}>Testowy tekst przeznaczony do prezentacji kontenerów</div>
            </div>
        )
    }
}

export default Home;
