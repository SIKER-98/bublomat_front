import React, {Component} from "react";
import {DeleteProduct, EditProduct, FetchProduct} from "../../api/ApiProduct";

import "../../style/Admin.css"

class AdminProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            isEdited: false,
            editedProduct: null
        }

        this.showComments = this.showComments.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
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

    async updateProduct(updateProduct) {
        let status = await EditProduct(updateProduct)
        // let status = 200

        if (status === 200) {
            let products = this.state.products
            products.forEach(function (element) {
                if (element.id === updateProduct.id)
                    element = updateProduct
            })

            this.setState({products: products})
        }else{
            alert('something went wrong')
        }

        this.setState({isEdited: false, editedProduct: null})
    }

    editProduct() {
        let product = this.state.editedProduct

        return (
            <div className={'popup-box'}>
                <label>Product name:</label>
                <input name={'productName'}
                       defaultValue={product.productName}
                       onChange={(event) => {
                           product.productName = event.target.value
                       }}
                />

                <label>Description:</label>
                <textarea name={'description'}
                          rows={5}
                          defaultValue={product.description}
                          onChange={(event) => {
                              product.description = event.target.value
                          }}
                />
                <button className={'btn-green'}
                        onClick={() => this.updateProduct(product)}
                >Update
                </button>
                <button className={'btn-red'}
                        onClick={() => this.setState({isEdited: false, editedProduct: null})}
                >Cancel
                </button>
            </div>
        )
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
            <>
                {this.state.isEdited && this.editProduct()}
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
                                    {/*<button className={'btn-orange'}*/}
                                    {/*        onClick={(event) => this.editProduct(event, product.id)}>*/}
                                    {/*    Edit*/}
                                    {/*</button>                                */}
                                    <button className={'btn-orange'}
                                            onClick={() => {
                                                this.setState({isEdited: true, editedProduct: product})
                                            }}>
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
            </>
        )
    }
}

export default AdminProductComponent;
