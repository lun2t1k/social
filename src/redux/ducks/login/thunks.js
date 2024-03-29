import { setUserData, setUserProfile, setUserPhoto, setUserStatus, addNewPost, setCaptchaURL } from './actions'
import * as types from './types'
import { swalError } from '../../../utils/swal'
import auth from '../../../api/auth'
import security from '../../../api/security'
import profile from '../../../api/profile'

const authMe = () => dispatch => {
    auth.getAuthStatus()
        .then(response => {
            if (response.resultCode === types.STATUS_CODE.SUCCESS) {
                let { userId, login, email } = response.data
                dispatch(setUserData(userId, login, email, true))
            }
        })
        .catch(error => {
            swalError(error)
        })
}

const setProfile = userID => dispatch => {
    profile.requestUserProfile(userID)
        .then(response => {
            if (response.status === 200) {
                dispatch(setUserProfile(response.data))
            }
        })
        .catch(error => {
            swalError(error)
        })
}

export const login = (email, password, rememberMe, captcha) => dispatch => {
    auth.loginRequest(email, password, rememberMe, captcha)
        .then(response => {
            if (response.data.resultCode === types.STATUS_CODE.SUCCESS) {
                dispatch(setProfile(response.data.data.userId))
                dispatch(authMe())
            } else if (response.data.resultCode === types.STATUS_CODE.VERIFICATION) {
                dispatch(getCaptchaURL())
            }
        })
        .catch(error => {
            swalError(error)
        })
}

export const logout = () => dispatch => {
    auth.logoutRequest()
        .then(response => {
            if (response.resultCode === types.STATUS_CODE.SUCCESS) {
                dispatch(setUserData(null, null, null, false))
                dispatch(setUserProfile(null))
            }
        })
        .catch(error => {
            swalError(error)
        })
}

// export const updateUserProfile = profileData => (dispatch, getState) => {
export const updateUserProfile = profileData => dispatch => {
    dispatch(setUserProfile(profileData))

    // const getAuthorizedUserId = getState().login.login.userId

    // profile.requestUpdateUserProfile(profileData)
    //     .then(response => {
    //         if (response.data.resultCode === types.STATUS_CODE.SUCCESS) {
    //             dispatch(setProfile(getAuthorizedUserId))
    //         }
    //     })
    //     .catch(error => {
    //         swalError(error)
    //     })
}

export const updateUserPhoto = photo => dispatch => {
    profile.requestUpdateUserPhoto(photo)
        .then(response => {
            if (response.status === 200) {
                dispatch(setUserPhoto(response.data.photos))
            }
        })
        .catch(error => {
            swalError(error)
        })
}

export const updateStatus = status => dispatch => {
    dispatch(setUserStatus(status))

    // profile.requestUpdateUserStatus(status)
    //     .then(response => {
    //         if (response.data.resultCode === types.STATUS_CODE.SUCCESS) {
    //             dispatch(setUserStatus(response.data.data))
    //         }
    //     })
    //     .catch(error => {
    //         swalError(error)
    //     })
}

export const addPost = postText => dispatch => {
    dispatch(addNewPost(postText))
}

export const getCaptchaURL = () => dispatch => {
    security.getCaptcha()
        .then(response => {
            if (response.status === 200) {
                dispatch(setCaptchaURL(response.data.url))
            }
        })
        .catch(error => {
            swalError(error)
        })
}
