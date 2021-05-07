import React from 'react';

// import './CommentModel.css';

class CommentComponent extends React.Component {
    
    
    render() {
        return (
            <>
                <h3>Ocena: {this.props.result}</h3>
                <p>{this.props.comment}</p>
            </>
        )
    }
}

export default CommentComponent;
