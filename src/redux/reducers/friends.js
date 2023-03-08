import { createAction, createReducer } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import friends from '../../api/friends';

const SET_FRIENDS = 'SET_FRIENDS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    friends: [],
    isFetching: false
}

const setFriends = createAction(SET_FRIENDS, function prepare(friends) {
    return {
        payload: { friends }
    }
});

const setIsFetching = createAction(SET_IS_FETCHING, function prepare(boolean) {
    return {
        payload: {
            isFetching: boolean
        }
    }
});

export const getFriends = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        friends.getFriendsRequest().then((data) => {
            dispatch(setFriends(data));
            dispatch(setIsFetching(false));
        }).catch((error) => {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                buttonsStyling: false,
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: 'px-6 py-3 rounded-xl text-xl text-white bg-violet-500 transition-all ease-in hover:bg-violet-600 disabled:bg-gray-500 disabled:hover:bg-gray-500',
                }
            });
        });
    }
}

const friendsPage = createReducer(initialState, (builder) => {
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
            return state;
        });
});

export default friendsPage;
