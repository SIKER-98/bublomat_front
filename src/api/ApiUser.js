import axios from "./axiosHelper";

/// logowanie
async function GetAccessToken(email, password) {
    const api = '/login'

    let token = '';

    // await axios.post(api, {"email": email, "password": password})
    //     .then(res => {
    //         console.log(res);
    //     })
    const data = {
        email: "admin",
        password: "admin"
    }

    await axios.post('https://bublomat.herokuapp.com/login', {
        "email": email,
        "password": password
    })
        .then(res => {
            console.log(res);
            token = res
        })


    console.log(token)
}

export {GetAccessToken};
