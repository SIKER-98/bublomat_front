class Comment {
    constructor(username) {
        this.username = username;
        this.date = new Date().getDate();
        this.text = '';
    }
}

export default Comment;