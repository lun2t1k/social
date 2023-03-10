import { createAction, createReducer } from '@reduxjs/toolkit'
import { swalError } from './../../helpers/swal'
import users from '../../api/users'

const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const FOLLOW_USER = 'FOLLOW_USER'
const UNFOLLOW_USER = 'UNFOLLOW_USER'
const SET_IS_FETCHING_USERS = 'SET_IS_FETCHING_USERS'
const SET_IS_FOLLOWING_PROCESS = 'SET_IS_FOLLOWING_PROCESS'
const STATUS_CODE = {
    SUCCESS: 0,
    ERROR: 1
}

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetchingUsers: false,
    isFollowingProcess: false,
    followingQueue: []
}

const setUsers = createAction(SET_USERS, function prepare(users) {
    return {
        payload: { users }
    }
})

const setTotalUsersCount = createAction(SET_TOTAL_USERS_COUNT, function prepare(totalUsersNumber) {
    return {
        payload: {
            totalCount: totalUsersNumber
        }
    }
})

const setCurrentPage = createAction(SET_CURRENT_PAGE, function prepare(currentPageNumber) {
    return {
        payload: {
            currentPage: currentPageNumber
        }
    }
})

const setIsFetchingUsers = createAction(SET_IS_FETCHING_USERS, function prepare(boolean) {
    return {
        payload: {
            isFetchingUsers: boolean
        }
    }
})

const followUser = createAction(FOLLOW_USER, function prepare(id) {
    return {
        payload: { id }
    }
})

const unfollowUser = createAction(UNFOLLOW_USER, function prepare(id) {
    return {
        payload: { id }
    }
})

const setIsFollowingProcess = createAction(SET_IS_FOLLOWING_PROCESS, function prepare(boolean, id) {
    return {
        payload: {
            isFollowingProcess: boolean,
            id: id
        }
    }
})

export const getUsers = (currentPage, pageSize) => {
    return dispatch => {
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
}

export const follow = id => {
    return dispatch => {
        dispatch(setIsFollowingProcess(true, id))
        users.followUserRequest(id)
            .then(response => {
                if (response.data.resultCode === STATUS_CODE.SUCCESS) {
                    dispatch(followUser(id))
                }
                dispatch(setIsFollowingProcess(false, id))
            })
            .catch(error => {
                swalError(error)
                dispatch(setIsFollowingProcess(false, id))
            })
    }
}

export const unfollow = id => {
    return dispatch => {
        dispatch(setIsFollowingProcess(true, id))
        users.unfollowUserRequest(id)
            .then(response => {
                if (response.data.resultCode === STATUS_CODE.SUCCESS) {
                    dispatch(followUser(id))
                }
                dispatch(setIsFollowingProcess(false, id))
            })
            .catch(error => {
                swalError(error)
                dispatch(setIsFollowingProcess(false, id))
            })
    }
}

const usersPage = createReducer(initialState, builder => {
    builder
        .addCase(setUsers, (state = initialState, action) => {
            return {
                ...state,
                users: action.payload.users
            }
        })
        .addCase(setTotalUsersCount, (state = initialState, action) => {
            return {
                ...state,
                totalCount: action.payload.totalCount
            }
        })
        .addCase(setCurrentPage, (state = initialState, action) => {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        })
        .addCase(setIsFetchingUsers, (state = initialState, action) => {
            return {
                ...state,
                isFetchingUsers: action.payload.isFetchingUsers
            }
        })
        .addCase(followUser, (state = initialState, action) => {
            // ! Error -> payload: {id: undefined}
            // ! The case doesn't receive the user id from action creator
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.id) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        })
        .addCase(unfollowUser, (state = initialState, action) => {
            // ! Error -> payload: {id: undefined}
            // ! The case doesn't receive the user id from action creator
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.id) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        })
        .addCase(setIsFollowingProcess, (state = initialState, action) => {
            return {
                ...state,
                isFollowingProcess: action.payload.isFollowingProcess,
                followingQueue: action.payload.isFollowingProcess
                    ? [...state.followingQueue, action.payload.id]
                    : state.followingQueue.filter(id => id !== action.payload.id)
            }
        })
        .addDefaultCase((state = initialState, action) => {
            return state
        })
})

export default usersPage
