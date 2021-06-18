import axios from "./axiosHelper";

async function SendEmail(email, subject, message) {
    const api = '/email/send'

    let status = 0

    await axios.post(api, {email, subject, message}, {})
        .then(res => {
            status = res.status
            console.log(res)
        })
        .catch(e => {
            console.log(e)
        })

    return status;
}

export default SendEmail
