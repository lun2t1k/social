import { instance } from './axios'

const profile = {
    requestUserProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    requestUserStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    requestUpdateUserProfile(profileData) {
        return instance.put('profile', profileData)
    },
    requestUpdateUserStatus(status) {
        return instance.put('profile/status', { status })
    },
    requestUpdateUserPhoto(photo) {
        let formData = new FormData()
        formData.append('image', photo)
        return instance.put('profile/photo', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    }
}

export default profile
