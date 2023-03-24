import { setUserProfile, setUserStatus } from './actions'
import profile from '../../../api/profile'
import { swalError } from '../../../utils/swal'

export const setProfile = userID => dispatch => {
    dispatch(setUserProfile(null))
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

export const setAuthorizedProfile = profileData => dispatch => {
    dispatch(setUserProfile(null))
    dispatch(setUserProfile(profileData))
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
