import { createAction, createReducer } from '@reduxjs/toolkit'
import { swalError } from './../../helpers/swal'
import friends from '../../api/friends'

const SET_FRIENDS = 'SET_FRIENDS'
const SET_IS_FETCHING_FRIENDS = 'SET_IS_FETCHING_FRIENDS'
const STATUS_CODE = {
    SUCCESS: 200,
    ERROR: 1
}


let initialState = {
    friends: [],
    isFetchingFriends: false
}

const setFriends = createAction(SET_FRIENDS, function prepare(friends) {
    return {
        payload: { friends }
    }
})

const setIsFetchingFriends = createAction(SET_IS_FETCHING_FRIENDS, function prepare(boolean) {
    return {
        payload: {
            isFetchingFriends: boolean
        }
    }
})

export const requestFriends = () => {
    return dispatch => {
        dispatch(setIsFetchingFriends(true))
        friends.getFriendsRequest().then(response => {
            if (response.status === STATUS_CODE.SUCCESS) {
                dispatch(setFriends(response.data))
                dispatch(setIsFetchingFriends(false))
            }
        }).catch(error => {
            swalError(error)
        })
    }
}

const friendsPage = createReducer(initialState, builder => {
    builder
        .addCase(setFriends, (state = initialState, action) => {
            return {
                ...state,
                friends: action.payload.friends
            }
        })
        .addCase(setIsFetchingFriends, (state = initialState, action) => {
            return {
                ...state,
                isFetchingFriends: action.payload.isFetchingFriends
            }
        })
        .addDefaultCase((state = initialState) => {
            return state
        })
})

export default friendsPage
