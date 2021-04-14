import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className={'home'}>
                <div className={'homeBox'}>Total number of all BUBLES in our database: <span>1024</span></div>
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
