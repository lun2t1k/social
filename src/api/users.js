import { instance } from './axios';

const users = {
    getUsersRequest(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    followUserRequest(userID) {
        return instance.post(`follow/${userID}`).then(response => response.data);
    },
    unfollowUserRequest(userID) {
        return instance.delete(`follow/${userID}`).then(response => response.data);
    }
}

export default users;
