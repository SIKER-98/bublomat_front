import axios from "./axiosHelper";

/// logowanie
async function GetAccessToken(email, password) {
    const api = '/login'

    let token = '';
    let accessToken = '';
    let status = 0;

    await axios.post(api, {
        "email": email,
        "password": password
    })
        .then(res => {
            status = res.status
            token = res.data.accessToken
            accessToken = res.data.accessToken.access_token
        })


    window.token = token
    window.accessToken = accessToken
    sessionStorage.setItem('token', accessToken)

    axios.defaults.headers = {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
    return status;
}

async function Register(firstName, secondName, password, email) {
    const api = '/register'

    const data = {
        "firstName": firstName,
        "lastName": secondName,
        "password": password,
        "email": email
    }

    console.log(data)

    let status = 0
    // let token = '';
    // let accessToken = '';

    await axios.post(api, {
        "firstName": firstName,
        "lastName": secondName,
        "password": password,
        "email": email
    },{})
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                status = res.status
                // token = res.data.accessToken
                // accessToken = res.data.accessToken.access_token
            }
        })

    // window.token = token
    // window.accessToken = accessToken
    // sessionStorage.setItem('token', accessToken)

    // axios.defaults.headers = {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
    return status;
    // return 204
}

async function FetchUsers() {
    const api = '/user/allusers'

    let status = 0
    let users = []

    await axios.get(api)
        .then(res => {
            status = res.status
            console.log(res)
            users = res.data
        })
        .catch(e => {
            console.log(e)
        })

    return {status, users}
}

async function DeleteUser(id) {
    //query
    const api = '/delete'

    let status = 0;

    await axios.delete(api, {params: {id}})
        .then(res => {
            status = res.status
        })
        .catch(e => {
            console.log(e)
        })

    return status
}

async function ChangePassword(userId, password) {
    const api = '/changepassword'

    let status = 0

    await axios.post(api, {userId, password}, {})
        .then(res => {
            status = res.status
            console.log(status)
        })
        .catch(e => {
            console.log(e)
        })

    return status;
}

async function WhoAmI(email) {
    const api = 'whoami'

    let status = 0
    let who = ''

    await axios.get(api, {params: {email}})
        .then(res => {
            status = res.status
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })

    return {status, who}
}

export {GetAccessToken, Register, DeleteUser, FetchUsers, ChangePassword, WhoAmI};
