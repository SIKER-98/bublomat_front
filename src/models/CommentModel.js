class CommentModel {
    constructor(userId, productId) {
        this.id = -1;
        this.productId = productId;
        this.userId = userId;
        this.content = '';
        this.rate = -1;
    }
}

export default CommentModel;