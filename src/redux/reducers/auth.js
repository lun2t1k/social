import { createAction, createReducer } from '@reduxjs/toolkit'
import { swalError } from './../../helpers/swal'
import auth from '../../api/auth'

const SET_USER_DATA = 'SET_USER_DATA'
const STATUS_CODE = {
    SUCCESS: 0,
    ERROR: 1
}

let initialState = {
    userID: null,
    login: null,
    email: null,
    isAuth: true,
    authorizedUserID: 27904
}

const setUserData = createAction(SET_USER_DATA, function prepare(userID, login, email, isAuth) {
    return {
        payload: { userID, login, email, isAuth }
    }
})

export const authMe = () => {
    return dispatch => {
        // ! The request doesn't get the right response, although I logged in
        auth.getAuthStatus()
            .then(response => {
                console.log('getAuthStatus: ', response);
                if (response.resultCode === STATUS_CODE.SUCCESS) {
                    let { userID, login, email } = response.data
                    dispatch(setUserData(userID, login, email, true))
                }
            })
            .catch(error => {
                swalError(error)
            })
    }
}

export const login = (email, password, rememberMe) => {
    return dispatch => {
        auth.loginRequest(email, password, rememberMe)
            .then(response => {
                console.log('loginRequest: ', response)
                if (response.data.resultCode === STATUS_CODE.SUCCESS) {
                    dispatch(authMe())
                }
            })
            .catch(error => {
                swalError(error)
            })
    }
}

export const logout = () => {
    return dispatch => {
        auth.logoutRequest()
            .then(response => {
                console.log('logoutRequest: ', response)
                if (response.resultCode === STATUS_CODE.SUCCESS) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
            .catch(error => {
                swalError(error)
            })
    }
}

const authReducer = createReducer(initialState, builder => {
    builder
        .addCase(setUserData, (state = initialState, action) => {
            return {
                ...state,
                ...action.payload
            }
        })
        .addDefaultCase((state = initialState) => {
            return state
        })
})

export default authReducer