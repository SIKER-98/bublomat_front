import React from 'react';
import lang from "../languagePack";

// import './CommentModel.css';

class CommentComponent extends React.Component {


    render() {
        this.lang = lang.getLang()
        return (
            <>
                <h3>{this.lang.productCardComponent.rate}{this.props.result}</h3>
                <p>{this.props.comment}</p>
            </>
        )
    }
}

export default CommentComponent;
