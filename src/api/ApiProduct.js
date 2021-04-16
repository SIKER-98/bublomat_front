import React, {useState, useEffect} from "react";
import axios from "./axios";


// Pobranie wszystkich przedmiotów:
//     https://bublomat.herokuapp.com/products/allproducts
//         Stworzenie przedmiotu
// https://bublomat.herokuapp.com/products/addproduct

function createProduct(data) {
    let product = new Produ
}

function fetchProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products/allproducts')
            .then(res => {
                let array = [];
                res.data.map(product => array.push(createProduct(product)));
                setProducts(array);
            });
    })

    return products;
}


class ApiProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    render() {
        return (
            <div>
                test
                {this.fetchProducts()}
            </div>
        );
    }

    #apiProduct = '/products/allproducts';

    // pobranie listy wszystkich produktow
    fetchProducts() {

        // useEffect(()=>{
        //     const res = axios.get(this.#apiProduct);
        //     console.log(res.data);
        // })

        // const res = await axios.get(this.#apiProduct);
        // console.log(res.data);
        //
        // this.setState({products: res.data})
        return "test"
    }

    // // stworzenie produtku
    // async createProduct(product) {
    //     let receivedProduct;
    //     const res = await axios.post(this.#apiProduct, product)
    //         .then(function (response) {
    //             console.log(response)
    //             receivedProduct = response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error)
    //         })
    //
    //     // return receivedProduct;
    // }
    //
    // // porabnie produktu
    // async getProduct(id) {
    //     let receivedProduct;
    //     const res = await axios.get(this.apiProduct + "/" + id)
    //     console.log(res.data);
    //
    //     // return res.data
    // }
}

export default ApiProduct;

