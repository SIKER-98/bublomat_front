import axios from './axiosHelper'
import ProductModel from "../models/CommentModel";

/// Pobranie wszystkich komentarzy
/// return: tablica komentarzy
async function FetchComments() {
    const api = '/comments/allcomments';
    let comments = [];

    await axios.get(api)
        .then(res => {
            console.log(JSON.parse(res.request.response))
            comments = JSON.parse(res.request.response)
        })

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
        })

    return comments;
}

/// Dodanie komentarza dla konkretnego produktu
/// input: komentarz
/// return komentarz
async function AddComment(newComment) {
    const api = '/comments/addcomment';
    let comment;

    await axios.post(api, {
        'commentId': newComment.commentId,
        'idProduct': newComment.idProduct,
        'idUser': newComment.idUser,
        'content': newComment.content,
        'rate': newComment.rate
    }).then(res => {
        console.log(res.request.response);
        comment = JSON.parse(res.request.response);
    })
}


export {FetchComments, AddComment, ProductComments};