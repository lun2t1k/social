import { instance } from './axios'

const profile = {
    getUserProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    getUserStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateUserStatus(status) {
        return instance.put('profile/status', { status })
    }
}

export default profile
