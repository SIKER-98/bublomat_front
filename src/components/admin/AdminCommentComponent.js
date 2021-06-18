import React, {Component} from "react";
import {DeleteComment, EditComment, ProductComments} from "../../api/ApiComment";

class AdminCommentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            isEdited: false,
            editedComment: null
        }

        this.editComment = this.editComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount() {
        this.getComments();
    }

    async getComments() {
        let comments = await ProductComments(this.props.location.state.id);
        comments.sort((x, y) => {
            if (x.id > y.id)
                return 1;
            if (x.id < y.id)
                return -1
            return 0
        })

        this.setState({comments: comments});
    }

    async updateComment(updatedComment) {
        let status = await EditComment(updatedComment)
        // let status = 200

        if (status === 200) {
            let comments = this.state.comments
            comments.forEach(function (element) {
                if (element.id === updatedComment.id)
                    element = updatedComment
            })

            this.setState({comments: comments})
        } else {
            alert('something went wrong')
        }

        this.setState({isEdited: false, editedComment: null})
    }

    editComment() {
        let comment = this.state.editedComment

        return (
            <div className={'popup-box'}>
                <label>Content:</label>
                <input name={'content'}
                       defaultValue={comment.content}
                       onChange={(event) => {
                           comment.content = event.target.value
                       }}
                />

                <label>Rate:</label>
                <input name={'rate'}
                       type={'number'}
                       defaultValue={comment.rate}
                       onChange={(event) => {
                           if (event.target.value >= 0 && event.target.value < 10)
                               comment.rate = event.target.value
                       }}
                />
                <button className={'btn-green'}
                        onClick={() => this.updateComment(comment)}
                >Update
                </button>
                <button className={'btn-red'}
                        onClick={() => this.setState({isEdited: false, editedComment: null})}
                >Cancel
                </button>
            </div>
        )
    }

    async deleteComment(event, id) {
        event.preventDefault()

        let comments = this.state.comments

        const status = await DeleteComment(id)
        if (status === 200) {
            comments = comments.filter((comment) => comment.commentId !== id)
            this.setState({comments: comments});
        }
        
    }

    render() {
        return (
            <>
                {this.state.isEdited && this.editComment()}
                <div className={'content-box-full'}>
                    <table className={'table-admin'}>
                        <thead>
                        <tr>
                            <th colSpan={1}>Id</th>
                            <th colSpan={1}>User</th>
                            <th colSpan={6}>Content</th>
                            <th colSpan={1}>Rate</th>
                            <th colSpan={1}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.comments.map((comment, key) => {
                            return <tr key={key}>
                                <td colSpan={1}><span>{comment.commentId}</span></td>
                                <td colSpan={1}>{comment.idUser}</td>
                                <td colSpan={6}>{comment.content}</td>
                                <td colSpan={1}>{comment.rate}</td>
                                <td colSpan={1}>
                                    <button className={'btn-orange'}
                                            onClick={() => {
                                                this.setState({isEdited: true, editedComment: comment})
                                            }}>
                                        Edit
                                    </button>
                                    <button className={'btn-red'}
                                            onClick={(event) => this.deleteComment(event, comment.commentId)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default AdminCommentComponent
