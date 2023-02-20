import { createAction, createReducer } from '@reduxjs/toolkit';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const setUserData = createAction(SET_USER_DATA, function prepare(userID, login, email) {
    return {
        payload: {
            id: userID,
            login: login,
            email: email
        }
    }
});

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