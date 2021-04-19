class Comment {
    constructor(userId, productId) {
        this.id = -1;
        this.productId = productId;
        this.userId = userId;
        this.date = new Date().getDate();
        this.text = '';
    }
}

export default Comment;