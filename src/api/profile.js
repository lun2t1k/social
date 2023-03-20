import { instance } from './axios'

const profile = {
    requestUserProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    requestUserStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    requestUpdateUserStatus(status) {
        return instance.put('profile/status', { status })
    }
}

export default profile
