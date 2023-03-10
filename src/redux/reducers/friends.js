import { createAction, createReducer } from '@reduxjs/toolkit'
import { swalError } from './../../helpers/swal'
import friends from '../../api/friends'

const SET_FRIENDS = 'SET_FRIENDS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

let initialState = {
    friends: [],
    isFetching: false
}

const STATUS_CODE = {
    SUCCESS: 200,
    ERROR: 1
}

const setFriends = createAction(SET_FRIENDS, function prepare(friends) {
    return {
        payload: { friends }
    }
})

const setIsFetching = createAction(SET_IS_FETCHING, function prepare(boolean) {
    return {
        payload: {
            isFetching: boolean
        }
    }
})

export const getFriends = () => {
    return dispatch => {
        dispatch(setIsFetching(true))
        friends.getFriendsRequest().then(response => {
            if (response.status === STATUS_CODE.SUCCESS) {
                dispatch(setFriends(response.data))
                dispatch(setIsFetching(false))
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
        .addCase(setIsFetching, (state = initialState, action) => {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        })
        .addDefaultCase((state = initialState, action) => {
            return state
        })
})

export default friendsPage
