import instance from './axios';

const profileAPI = {
    getProfileRequest(userID) {
        return instance.get(`profile/${userID}`).then(response => response.data);
    },
}

export default profileAPI;
