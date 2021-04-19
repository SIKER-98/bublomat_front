import React, {useState, useEffect} from "react";
import axios from "./axios";

import Product from "../models/Product";

// koncowka do api
const apiProduct = '/api/products';

/// Pobranie wszystkich produktów
/// return: tablica wszystkich produktów
function fetchProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(apiProduct)
            .then(res => {
                let array = [];
                res.data.map(product => array.push(JSON.parse(product)));
                setProducts(array);
            });
    })

    console.log(products)
    return products;
}


// Pobranie produktu po nazwie
// input: product name - wyszukiwana fraza
// return: tablica obiektow typu Product
function searchProduct(productName) {
    const [products, setProducts] = useState([]);

    let searched = new Product();
    searched.productName = productName;

    useEffect(() => {

        axios.get(apiProduct, {params: {product: searched}})
            .then(res => {
                let array = [];
                res.data.map(product => array.push(createProduct(JSON.parse(product))));
                setProducts(array);
            });
    })

    console.log(products)
    return products;
}

/// Dodawanie produktu
/// input: produkt do dodania
/// return: dodany produkt
function addProduct(newProduct) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.post(apiProduct, {params: {product: newProduct}})
            .then(res => {
                let product = createProduct(JSON.parse(res));
                setProduct(product);
            })
    })

    console.log(product);
    return product;
}

/// Wyszukiwanie produktu po jego id
/// input: id produktu
/// return: wyszukany produkt
function getProductById(id) {
    const [product, setProduct] = useState(null);

    let searched = new Product();
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
function rateProduct(product, userId){
    const [product, setProduct] = useState(null);

    useEffect(()=>{
        axios.pull(apiProduct, {params:{product:product, userId:userId}})
            .then(res=>{
                let product = createProduct(JSON.parse(res));
                setProduct(product);
            })
    })

    console.log(product);
    return product
}



export {fetchProduct, searchProduct, addProduct, getProductById, rateProduct};

/// stworzenie produktu z JSON-a
function createProduct(obj) {
    let product = new Product();
    product.id = obj.id;
    product.productName = obj.productName;
    product.description = obj.description;
    product.rating = obj.rating;
    product.img = obj.img;

    return product;
}