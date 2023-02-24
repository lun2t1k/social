import { createAction, createReducer } from '@reduxjs/toolkit';
import authAPI from './../api/authAPI';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const setUserData = createAction(SET_USER_DATA, function prepare(userID, login, email) {
    return {
        payload: {
            id: userID,
            login: login,
            email: email
        }
    }
});

export const authMe = () => {
    return (dispatch) => {
        // ! The request doesn't get the right response, although I logged in
        authAPI.getAuthStatus().then((response) => {
            if (response.resultCode === 0) {
                let {userID, login, email} = response.data;
                dispatch(setUserData(userID, login, email));
            }
        }).catch(error => {
            alert(error);
        });
    }
}

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUserData, (state = initialState, action) => {
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        })
        .addDefaultCase((state = initialState, action) => {
            return state
        });
});

export default authReducer;