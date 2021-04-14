import React from 'react';

import './ProductCard.css';

class ProductCard extends React.Component {
    render() {
        return (
            <div className={'searchedElement'}>
                <img src={'img/wisnia.jpg'} alt={'img'}/>
                <div className={'productInfo'}>
                    <h1>Osobnik niereformowalny</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                    <h2>Rating: <span>66.6%</span></h2>
                </div>
            </div>
        )
    }
}

export default ProductCard;