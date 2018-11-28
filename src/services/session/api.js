/* Firepase specific API */

import axios from 'axios';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    url: process.env.REACT_APP_apiUrl
}

export const fetchApi = (payload = {}, method = 'post') => {
    return axios({
        method,
        url: `${firebaseConfig.url}${firebaseConfig.apiKey}`,
        data: payload,
    })
};