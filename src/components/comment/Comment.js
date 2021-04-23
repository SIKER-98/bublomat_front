import React from 'react';

import './Comment.css';

class Comment extends React.Component {
    
    
    render() {
        return (
            <>
                <h3>Ocena: {this.props.result}</h3>
                <p>{this.props.comment}</p>
            </>
        )
    }
}

export default Comment;
