import * as types from './types'
import { setUserProfile, setUserStatus, addNewPost } from './actions'
import profile from '../../../api/profile'
import { swalError } from '../../../utils/swal'

export const setProfile = userID => dispatch => {
    profile.requestUserProfile(userID)
        .then(response => {
            if (response.status === types.STATUS_CODE.SUCCESS) {
                dispatch(setUserProfile(response.data))
            }
        })
}

export const setStatus = userID => dispatch => {
    profile.requestUserStatus(userID)
        .then(response => {
            if (response.data === null) {
                dispatch(setUserStatus(''))
            } else {
                dispatch(setUserStatus(response.data))
            }
        })
}

export const updateStatus = status => dispatch => {
    profile.requestUpdateUserStatus(status)
        .then(response => {
            if (response.data.resultCode === types.STATUS_CODE.SUCCESS) {
                dispatch(setUserStatus(status))
            }
        })
        .catch(error => {
            swalError(error)
        })
}

export const addPost = postText => dispatch => {
    dispatch(addNewPost(postText))
}
