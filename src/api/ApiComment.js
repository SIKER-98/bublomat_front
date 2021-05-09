import axios from './axiosHelper'

/// Pobranie wszystkich komentarzy
/// return: tablica komentarzy
async function FetchComments() {
    const api = '/comments/allcomments';
    let comments = [];

    await axios.get(api)
        .then(res => {
            console.log(JSON.parse(res.request.response))
            comments = JSON.parse(res.request.response)
        }).catch(e => alert('Problem with ApiComponent-FetchComments: ' + e.message()))

    return comments;
}

/// Pobranie komentarzy dla konkretnego produktu
/// input: id produtkut
/// return: komentarze produktu
async function ProductComments(idProduct) {
    const api = '/comments/productcomments';
    let comments = [];

    await axios.get(api, {params: {id: idProduct}})
        .then(res => {
            comments = JSON.parse(res.request.response);
        }).catch(e => alert('Problem with ApiComponent-ProductComments: ' + e.message()))

    return comments;
}

/// Dodanie komentarza dla konkretnego produktu
/// input: komentarz
/// return komentarz
async function AddComment(newComment) {
    const api = '/comments/addcomment';

    await axios.post(api, {
        'commentId': newComment.commentId,
        'idProduct': newComment.idProduct,
        'idUser': newComment.idUser,
        'content': newComment.content,
        'rate': newComment.rate
    }).then(res => {
        console.log(res.request.response);
    }).catch(e => alert('Problem with ApiComponent-AddComment: ' + e.message()))
}


export {FetchComments, AddComment, ProductComments};