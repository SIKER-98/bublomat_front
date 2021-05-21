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
        "secondName": secondName,
        "password": password,
        "email": email
    }

    console.log(data)

    let status = 0
    let token = '';
    let accessToken = '';

    await axios.post(api, {
        "firstName": firstName,
        "secondName": secondName,
        "password": password,
        "email": email
    })
        .then(res=>{
            console.log(res)
            if(res.status===200){
                status = res.status
                token = res.data.accessToken
                accessToken = res.data.accessToken.access_token
            }
        })

    window.token = token
    window.accessToken = accessToken
    sessionStorage.setItem('token', accessToken)

    axios.defaults.headers = {"Authorization": `Bearer ${sessionStorage.getItem('token')}`}
    return status;
    // return 204
}

export {GetAccessToken, Register};
