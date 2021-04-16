import axios from './axios';

class ApiComment {
    #apiComment = '/Comments';

    // pobranie komentarza do produktu
    async fetchComments(postId) {
        const res = await axios.get(this.#apiComment + `/${postId}`);
        console.log(res.data);

        // return res.data;
    }

    //dodanie komentarza do produktu
    async addComment(comment) {
        let receivedComment;
        const res = await axios.post(this.#apiComment, comment)
            .then(function (response) {
                console.log(response);
                receivedComment = response.data;
            })
            .catch(function (error) {
                console.log(error)
            })

        // return receivedComment
    }

    async editComment(comment){
        let receivedComment;
        await axios.put()
    }
}