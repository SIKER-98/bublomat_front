import React, {useState, useEffect} from "react";
import axios from './axiosHelper'

import ProductModel from "../models/ProductModel.js";

const apiProduct = '/api/products';

/// Pobranie wszystkich produktów
/// return: tablica wszystkich produktów
async function FetchProduct() {
    const api = '/api/products';
    let products = [];

    await axios.get(api)
        .then(res => {
            console.log(JSON.parse(res.request.response))
            products = JSON.parse(res.request.response)
        })


    return products;
}

/// Pobranie produktów po nazwie
/// input: nazwa produktu
/// return: tablica wszystkich produktów
async function SearchProduct(productName) {
    const api = '/api/search';
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
    const api = '/api/products'
    let product;

    await axios.post(api, JSON.stringify(newProduct))
        .then(res => {
            console.log('res')
            console.log(res.request.response)
            product = JSON.parse(res.request.response)
        })

    await axios.post(api, {
        "id": newProduct.id,
        "productName": newProduct.productName,
        "description": newProduct.desc,
        "img": newProduct.img,
        "rating": newProduct.rating,
    })
        .then(res => {
            console.log('res')
            console.log(res.request.response)
            product = JSON.parse(res.request.response)
        })

    // console.log(product);
    return product;
}

/// Wyszukiwanie produktu po jego id
/// input: id produktu
/// return: wyszukany produkt
function GetProductById(id) {
    const [product, setProduct] = useState(null);

    let searched = new ProductModel();
    searched.id = id;

    useEffect(() => {
        axios.get(apiProduct, {params: {product: searched}})
            .then(res => {
                let product = createProduct(JSON.parse(res));
                setProduct(product);
            })
    })

    console.log(product);
    return product;
}

/// Dodanie oceny do produktu
/// input produkt, id uzytkownik
/// return produkt po ocenie
function RateProduct(productName, userId) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.pull(apiProduct, {params: {product: productName, userId: userId}})
            .then(res => {
                let product = createProduct(JSON.parse(res));
                setProduct(product);
            })
    })

    console.log(product);
    return product
}


export {FetchProduct, SearchProduct, AddProduct, GetProductById, RateProduct};

/// stworzenie produktu z JSON-a
function createProduct(obj) {
    console.log(obj)

    let product = new ProductModel();
    product.id = obj.id;
    product.productName = obj.productName;
    product.description = obj.description;
    product.rating = obj.rating;
    product.img = obj.img;

    console.log("product " + product)

    return product;
}