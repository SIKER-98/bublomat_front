import React, {Component} from "react";

import "../../style/Admin.css"
import {ChangePassword, DeleteUser, FetchUsers} from "../../api/ApiUser";
import {Link} from "react-router-dom";

class AdminUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isEdited: false,
            editedUser: null
        }

        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    async getUsers() {
        const res = await FetchUsers();

        if (res.status === 200) {

            res.users.sort((x, y) => {
                if (x.user_id > y.user_id)
                    return 1;
                if (x.user_id < y.user_id)
                    return -1
                return 0
            })

            this.setState({users: res.users});
        }
    }


    async changePassword(user) {
        if (!user.password && !user.password2) {
            alert('Empty password!')
        }

        if (user.password !== user.password2) {
            alert('Different password!')
        }

        let status = await ChangePassword(user.auth_Id, user.password)

        if (status === 200) {
            alert("Password changed!")
        } else {
            alert("Problem with changing password!")
        }
    }

    editUser() {
        let user = this.state.editedUser

        return (
            <div className={'popup-box'}>
                <label>email:</label>
                <hr/>
                <label>Password:</label>
                <input name={'password'}
                       defaultValue={''}
                       onChange={(event) => {
                           user.password = event.target.value
                       }}
                />

                <label>Confirm password:</label>
                <input name={'password2'}
                       defaultValue={''}
                       onChange={(event) => {
                           user.password2 = event.target.value
                       }}
                />

                <button className={'btn-green'}
                        onClick={() => this.changePassword(user)}
                >
                    Update
                </button>
                <button className={'btn-red'}
                        onClick={() => this.setState({isEdited: false, editedUser: null})}
                >
                    Cancel
                </button>
            </div>
        )
    }

    async deleteUser(event, id) {
        event.preventDefault()

        let users = this.state.users
        let status = await DeleteUser(id)

        if (status === 200) {
            users = users.filter(user => user.user_id * 1 !== id * 1)
            this.setState({users})
        }
    }

    render() {
        return (
            <>
                <Link to={'/manageProduct'}
                      className={'btn-blue'}
                >
                    Products
                </Link>

                {this.state.isEdited && this.editUser()}
                <div className={'content-box-full'}>
                    <table className={'table-admin'}>
                        <thead>
                        <tr>
                            <th colSpan={1}>Id</th>
                            <th colSpan={3}>Email</th>
                            <th colSpan={2}>First name</th>
                            <th colSpan={2}>Last name</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map((user, key) => {
                            return <tr key={key}>
                                <td colSpan={1}><span>{user.user_id}</span></td>
                                <td colSpan={3}>{user.email}</td>
                                <td colSpan={2}>{user.first_Name}</td>
                                <td colSpan={2}>{user.last_Name}</td>
                                <td colSpan={2}>
                                    <button className={'btn-orange'}
                                            onClick={() => {
                                                this.setState({isEdited: true, editedUser: user})
                                            }}>
                                        Edit
                                    </button>
                                    <button className={'btn-red'}
                                            onClick={(event) => this.deleteUser(event, user.auth_Id)}>
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

export default AdminUserComponent;
