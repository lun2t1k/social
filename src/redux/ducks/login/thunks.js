import { setUserData } from './actions'
import * as types from './types'
import { swalError } from '../../../utils/swal'
import auth from '../../../api/auth'

export const authMe = () => dispatch => {
    // ! The request doesn't get the right response, although I logged in
    auth.getAuthStatus()
        .then(response => {
            console.log('getAuthStatus: ', response)
            if (response.resultCode === types.STATUS_CODE.SUCCESS) {
                let { userId, login, email } = response.data
                dispatch(setUserData(userId, login, email, true))
            }
        })
        .catch(error => {
            swalError(error)
        })
}

export const login = (email, password, rememberMe) => dispatch => {
    auth.loginRequest(email, password, rememberMe)
        .then(response => {
            console.log('loginRequest: ', response)
            if (response.data.resultCode === types.STATUS_CODE.SUCCESS) {
                dispatch(authMe())
            }
        })
        .catch(error => {
            swalError(error)
        })
}

export const logout = () => dispatch => {
    auth.logoutRequest()
        .then(response => {
            console.log('logoutRequest: ', response)
            if (response.resultCode === types.STATUS_CODE.SUCCESS) {
                dispatch(setUserData(null, null, null, false))
            }
        })
        .catch(error => {
            swalError(error)
        })
}
