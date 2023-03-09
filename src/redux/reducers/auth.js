import { createAction, createReducer } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import auth from '../../api/auth';

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
        auth.getAuthStatus().then((response) => {
            if (response.resultCode === 0) {
                let {userID, login, email} = response.data;
                dispatch(setUserData(userID, login, email));
            }
        }).catch(error => {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                buttonsStyling: false,
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: 'px-6 py-3 rounded-xl text-xl text-white bg-violet-400 transition-all ease-in hover:bg-violet-500 disabled:bg-gray-400 disabled:hover:bg-gray-400',
                }
            });
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