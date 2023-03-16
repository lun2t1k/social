import { createAction } from '@reduxjs/toolkit'
import * as types from './types'

export const setFriends = createAction(types.SET_FRIENDS, function prepare(friends) {
    return {
        payload: { friends }
    }
})

export const setIsFetchingFriends = createAction(types.SET_IS_FETCHING_FRIENDS, function prepare(boolean) {
    return {
        payload: {
            isFetchingFriends: boolean
        }
    }
})

export const setUsers = createAction(types.SET_USERS, function prepare(users) {
    return {
        payload: { users }
    }
})

export const setTotalUsersCount = createAction(types.SET_TOTAL_USERS_COUNT, function prepare(totalUsersNumber) {
    return {
        payload: {
            totalCount: totalUsersNumber
        }
    }
})

export const setCurrentPage = createAction(types.SET_CURRENT_PAGE, function prepare(currentPageNumber) {
    return {
        payload: {
            currentPage: currentPageNumber
        }
    }
})

export const setIsFetchingUsers = createAction(types.SET_IS_FETCHING_USERS, function prepare(boolean) {
    return {
        payload: {
            isFetchingUsers: boolean
        }
    }
})

export const followUser = createAction(types.FOLLOW_USER, function prepare(id) {
    return {
        payload: { id }
    }
})

export const unfollowUser = createAction(types.UNFOLLOW_USER, function prepare(id) {
    return {
        payload: { id }
    }
})

export const setIsFollowingProcess = createAction(types.SET_IS_FOLLOWING_PROCESS, function prepare(boolean, id) {
    return {
        payload: {
            isFollowingProcess: boolean,
            id: id
        }
    }
})
