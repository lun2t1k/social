import {
    setIsFetchingFriends,
    setFriends,
    setCurrentPage,
    setIsFetchingUsers,
    setUsers,
    setTotalUsersCount,
    setIsFollowingProcess,
    followUser,
    unfollowUser
} from './actions'
import * as types from './types'
import { swalError } from '../../../utils/swal'
import friends from '../../../api/friends'
import users from '../../../api/users'

export const requestFriends = () => dispatch => {
    dispatch(setIsFetchingFriends(true))
    friends.getFriendsRequest().then(response => {
        if (response.status === types.STATUS_CODE.SUCCESS) {
            dispatch(setFriends(response.data))
            dispatch(setIsFetchingFriends(false))
        }
    }).catch(error => {
        swalError(error)
    })
}

export const requestUsers = (currentPage, pageSize) => dispatch => {
    dispatch(setCurrentPage(currentPage))
    dispatch(setIsFetchingUsers(true))
    users.getUsersRequest(currentPage, pageSize)
        .then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setIsFetchingUsers(false))
            dispatch(setTotalUsersCount(response.data.totalCount))
        })
        .catch(error => {
            swalError(error)
        })
}

export const follow = id => dispatch => {
    dispatch(setIsFollowingProcess(true, id))
    users.followUserRequest(id)
        .then(response => {
            if (response.data.resultCode === types.STATUS_CODE.SUCCESS) {
                dispatch(followUser(id))
            }
            dispatch(setIsFollowingProcess(false, id))
        })
        .catch(error => {
            swalError(error)
            dispatch(setIsFollowingProcess(false, id))
        })
}

export const unfollow = id => dispatch => {
    dispatch(setIsFollowingProcess(true, id))
    users.unfollowUserRequest(id)
        .then(response => {
            if (response.data.resultCode === types.STATUS_CODE.SUCCESS) {
                dispatch(unfollowUser(id))
            }
            dispatch(setIsFollowingProcess(false, id))
        })
        .catch(error => {
            swalError(error)
            dispatch(setIsFollowingProcess(false, id))
        })
}
