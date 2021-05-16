import React, {Component} from "react";
import {DeleteComment, ProductComments} from "../../api/ApiComment";

class AdminCommentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        }

        this.editComment = this.editComment.bind(this);
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

    editComment(event, id) {

    }

    async deleteComment(event, id) {
        event.preventDefault()

        let comments = this.state.comments

        await DeleteComment(id).then(status => {
            if (status === 200) {
                comments = comments.filter((comment) => comment.id !== id)
            }
        })

        this.setState({comments: comments});
    }

    render() {
        return (
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
                                        onClick={(event) => this.editComment(event, comment.id)}>
                                    Edit
                                </button>
                                <button className={'btn-red'}
                                        onClick={(event) => this.deleteComment(event, comment.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminCommentComponent