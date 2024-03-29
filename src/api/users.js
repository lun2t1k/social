import {instance} from './axios'

const users = {
    getUsersRequest(currentPage = 0, pageSize = 5) {
        return instance.get(`users?page=${currentPage + 1}&count=${pageSize}`)
    },
    followUserRequest(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollowUserRequest(userID) {
        return instance.delete(`follow/${userID}`)
    }
}

export default users
