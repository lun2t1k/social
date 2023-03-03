import instance from './axios';

const profileAPI = {
    getUserProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => response.data);
    },
    getUserStatus(userID) {
        return instance.get(`profile/status/${userID}`).then(response => response.data);
    },
    updateUserStatus(status) {
        return instance.put('profile/status', {status}).then(response => response.data);
    },
}

export default profileAPI;
