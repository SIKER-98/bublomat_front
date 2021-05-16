import axios from './axiosHelper'
import ProductModel from "../models/ProductModel.js";

/// Pobranie wszystkich produktów
/// return: tablica wszystkich produktów
async function FetchProduct() {
    const api = '/products/allproducts';
    let products = [];

    await axios.get(api)
        .then(res => {
            // console.log(JSON.parse(res.request.response))
            products = JSON.parse(res.request.response)
        })


    return products;
}

/// Pobranie produktów po nazwie
/// input: nazwa produktu
/// return: tablica wszystkich produktów
async function SearchProduct(productName) {
    const api = '/products/search';
    let products = [];

    let searched = new ProductModel();
    searched.productName = productName;

    await axios.get(api, {params: {productName: productName}})
        .then(res => products = JSON.parse(res.request.response))

    return products;
}


/// Dodawanie produktu
/// input: produkt do dodania
/// return: dodany produkt
async function AddProduct(newProduct) {
    const api = '/products/addproducts'
    // let product;
    console.log('test')

    let code;

    await axios.post(api, {
        "id": newProduct.id,
        "productName": newProduct.productName,
        "description": newProduct.description,
        "rating": newProduct.rating,
        "img": newProduct.img,
    })
        .then(res => {
            code = res.status;
            // product = JSON.parse(res.request.response)
        })

    return code;
}

/// Wyszukiwanie produktu po jego id
/// input: id produktu
/// return: wyszukany produkt
async function GetProductById(id) {
    const api = '/products/searchid';
    let products = [];

    let searched = new ProductModel();
    searched.id = id;

    await axios.get(api, {params: {productId: id}})
        .then(res => products = JSON.parse(res.request.response))

    return products;
}

async function DeleteProduct(id) {
    const api = 'products/delete';
    let response;

    await axios.delete(api, {params: {id: id}})
        .then(res => response = res);

    return response.status
}

export {FetchProduct, SearchProduct, AddProduct, GetProductById, DeleteProduct};