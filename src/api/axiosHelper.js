import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bublomat.herokuapp.com',
});

// instance.interceptors.request.use(
//     config => {
//         const token = window.accessToken ? window.accessToken : 'dummy_token';
//         config.headers['Authorization'] = 'Bearer ' + token;
//         return config
//     },
//     error => {
//         Promise.reject(error)
//     }
// );
//
// instance.interceptors.response.use((response) => {
//     return response
// }, function (error) {
//     return Promise.reject(error);
// })

export default instance;
