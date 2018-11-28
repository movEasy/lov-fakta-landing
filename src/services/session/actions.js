import * as actionTypes from './actionTypes';
import {fetchApi} from './api';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token,
        userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        fetchApi(authData)
            .then(res => {
                console.log(res);
                dispatch(authSuccess(res.data.idToken, res.data.localId))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
        // axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD1Nis5wZNisDu91I06zVg4ikkhR6b3ZV4', authData)
        //     .then(res => {
        //         console.log(res);
        //         dispatch(authSuccess(res.data.idToken, res.data.localId));
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         dispatch(authFail(err));
        //     })
    }
}