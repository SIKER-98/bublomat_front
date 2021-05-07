class CommentModel {
    constructor(userId, productId) {
        this.commentId = -1;
        this.idProduct = productId;
        this.idUser = userId;
        this.content = '';
        this.rate = -1;
    }
}

export default CommentModel;