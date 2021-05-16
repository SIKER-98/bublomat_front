import React, {Component} from "react";
import {DeleteProduct, FetchProduct} from "../../api/ApiProduct";

import "../../style/Admin.css"

class AdminProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        }

        this.showComments = this.showComments.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        const products = await FetchProduct();
        products.sort((x, y) => {
            if (x.id > y.id)
                return 1;
            if (x.id < y.id)
                return -1
            return 0
        })

        this.setState({products: products});
    }

    showComments(event, id) {
        this.props.history.push('/manageComment', {id})
    }

    editProduct(event, id) {

    }

    async deleteProduct(event, id) {
        event.preventDefault()

        let products = this.state.products

        await DeleteProduct(id).then(status => {
            if (status === 200) {
                products = products.filter((product) => {
                    return product.id * 1 !== id * 1;
                })

                this.setState({products: products});
            }
        })
    }

    render() {
        return (
            <div className={'content-box-full'}>
                <table className={'table-admin'}>
                    <thead>
                    <tr>
                        <th colSpan={1}>Id</th>
                        <th colSpan={2}>Product name</th>
                        <th colSpan={5}>Description</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((product, key) => {
                        return <tr key={key}>
                            <td colSpan={1}><span>{product.id}</span></td>
                            <td colSpan={2}>{product.productName}</td>
                            <td colSpan={5}>{product.description}</td>
                            <td colSpan={2}>
                                <button className={'btn-green'}
                                        onClick={(event) => this.showComments(event, product.id)}>
                                    Comments
                                </button>
                                <button className={'btn-orange'}
                                        onClick={(event) => this.editProduct(event, product.id)}>
                                    Edit
                                </button>
                                <button className={'btn-red'}
                                        onClick={(event) => this.deleteProduct(event, product.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AdminProductComponent;