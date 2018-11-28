/* Firepase specific API */

import axios from 'axios';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREPASE_API_KEY,
    url: process.env.REACT_APP_API_URL
}

export const fetchApi = (payload = {}, method = 'post') => {
    return axios({
        method,
        url: `${firebaseConfig.url}${firebaseConfig.apiKey}`,
        data: payload,
    })
};