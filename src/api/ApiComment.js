import axios from './axiosHelper'

/// Pobranie wszystkich komentarzy
/// return: tablica komentarzy
async function FetchComments() {
    const api = '/comments/allcomments';
    let comments = [];

    await axios.get(api)
        .then(res => {
            comments = JSON.parse(res.request.response)
        }).catch(e => console.log(e))

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
        }).catch(e => alert('Problem with ApiComponent-ProductComments: ' + e))

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
    }).catch(e => alert('Problem with ApiComponent-AddComment: ' + e))
}

async function DeleteComment(id) {
    const api = '/comments/deleteId';
    let response;

    await axios.delete(api, {params: {id: id}})
        .then(res => response = res);

    return response.status
}

async function EditComment(comment) {
    const api = 'comments/updatecomment?'

    console.log(comment)
    let status = 0

    // await axios.patch(api, {
    //     id:product.id,
    //     productname:product.productName,
    //     description:product.description,
    //     rating:0.0,
    //     img:""
    // })
    //     .then(res=>{
    //         console.log(res)
    //         status = res.status
    //     })
    const params=new URLSearchParams({
        id:comment.commentId,
        content:comment.content,
        rating:comment.rate
    }).toString()
    console.log(params)

    await axios.patch(api+params)
        .then(res => {
            console.log(res)
            status = res.status
        })

    return status;
}


export {FetchComments, AddComment, ProductComments, DeleteComment, EditComment};
