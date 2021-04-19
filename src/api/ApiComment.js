import axios from './axios';
import {useEffect, useState} from "react";


const apiComment = '/api/Comments';

/// Pobranie wszystkich komentarzy dla produktu
/// input: produkt
/// return: tablica wszystkich komentarzy dla produktu
function fetchComments(product) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(apiComment, {params: {product: product}})
            .then(res => {
                let array = [];
                res.data.map(comment => array.push(createComment(JSON.parse(comment))));
                setComments(array);
            });
    })

    console.log(comments)
    return comments;
}

/// Dodanie komentarza
/// input: produkt, user
/// return: komentarz
function addComment(newComment) {
    const [comment, setComment] = useState(null);

    useEffect(() => {
        axios.post(apiComment, {params: {comment: newComment}})
            .then(res => {
                let comment = createComment(JSON.parse(res));
                setComment(comment);
            });
    });

    console.log(comments);
    return comments;
}

/// Edycja komentarza
/// input: komentarz
/// return: zmieniony komentarz
function editComment(editedComment) {
    const [comment, setComment] = useState(null);

    useEffect(() => {
        axios.pull(apiComment, {params: {comment: editedComment}})
            .then(res => {
                let comment = createComment(JSON.parse(res));
                setComment(comment);
            })
    })

    console.log(comment);
    return comment;
}

/// Usuwanie komentarza
/// input: komentarz

function deleteComment(deletedComment) {
    useEffect(() => {
        axios.delete(apiComment, {params: {comment: deletedComment}})
    })
}


export {fetchComments, addComment, editComment, deleteComment};

/// stworzenie komentarza z JSON-a
function createComment(obj) {
    let product = new Comment(obj.userId, obj.productId);
    product.id = obj.id;
    product.date = obj.date;
    product.text = obj.text;

    return product;
}