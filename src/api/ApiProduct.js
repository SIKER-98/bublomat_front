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
    let product;


    await axios.post(api, {
        "id": newProduct.id,
        "productName": newProduct.productName,
        "description": newProduct.description,
        "rating": newProduct.rating,
        "img": newProduct.img,
    })
        .then(res => {
            product = JSON.parse(res.request.response)
        })

    return product;
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

/// Dodanie oceny do produktu
/// input produkt, id uzytkownik
/// return produkt po ocenie
// function RateProduct(productName, userId) {
//     const [product, setProduct] = useState(null);
//
//     useEffect(() => {
//         axios.pull(apiProduct, {params: {product: productName, userId: userId}})
//             .then(res => {
//                 let product = createProduct(JSON.parse(res));
//                 setProduct(product);
//             })
//     })
//
//     console.log(product);
//     return product
// }


export {FetchProduct, SearchProduct, AddProduct,GetProductById};

/// stworzenie produktu z JSON-a
// function createProduct(obj) {
//     console.log(obj)
//
//     let product = new ProductModel();
//     product.id = obj.id;
//     product.productName = obj.productName;
//     product.description = obj.description;
//     product.rating = obj.rating;
//     product.img = obj.img;
//
//     console.log("product " + product)
//
//     return product;
// }