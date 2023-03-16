import { createReducer, combineReducers } from '@reduxjs/toolkit'
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

const initialFriendsState = {
    friends: [],
    isFetchingFriends: false
}

const initialSuggestionsState = {
    users: [],
    isFetchingUsers: false,
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFollowingProcess: false,
    followingQueue: []
}

const friendsReducer = createReducer(initialFriendsState, builder => {
    builder
        .addCase(setFriends, (state = initialFriendsState, action) => {
            return {
                ...state,
                friends: action.payload.friends
            }
        })
        .addCase(setIsFetchingFriends, (state = initialFriendsState, action) => {
            return {
                ...state,
                isFetchingFriends: action.payload.isFetchingFriends
            }
        })
        .addDefaultCase((state = initialFriendsState) => {
            return state
        })
})

const suggestionsReducer = createReducer(initialSuggestionsState, builder => {
    builder
        .addCase(setUsers, (state = initialSuggestionsState, action) => {
            return {
                ...state,
                users: action.payload.users
            }
        })
        .addCase(setTotalUsersCount, (state = initialSuggestionsState, action) => {
            return {
                ...state,
                totalCount: action.payload.totalCount
            }
        })
        .addCase(setCurrentPage, (state = initialSuggestionsState, action) => {
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        })
        .addCase(setIsFetchingUsers, (state = initialSuggestionsState, action) => {
            return {
                ...state,
                isFetchingUsers: action.payload.isFetchingUsers
            }
        })
        .addCase(followUser, (state = initialSuggestionsState, action) => {
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
        .addCase(unfollowUser, (state = initialSuggestionsState, action) => {
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
        .addCase(setIsFollowingProcess, (state = initialSuggestionsState, action) => {
            return {
                ...state,
                isFollowingProcess: action.payload.isFollowingProcess,
                followingQueue: action.payload.isFollowingProcess
                    ? [...state.followingQueue, action.payload.id]
                    : state.followingQueue.filter(id => id !== action.payload.id)
            }
        })
        .addDefaultCase((state = initialSuggestionsState) => {
            return state
        })
})

export default combineReducers({
    friends: friendsReducer,
    suggestions: suggestionsReducer
})
