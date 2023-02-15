import { createAction, createReducer } from '@reduxjs/toolkit';

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
};

export const setUsers = createAction(SET_USERS, function prepare(users) {
    return {
        payload: {
            users: users
        }
    }
});

export const setTotalUsersCount = createAction(SET_TOTAL_USERS_COUNT, function prepare(totalUsersNumber) {
    return {
        payload: {
            totalCount: totalUsersNumber
        }
    }
});

export const setCurrentPage = createAction(SET_CURRENT_PAGE, function prepare(currentPageNumber) {
    return {
        payload: {
            currentPage: currentPageNumber
        }
    }
});

export const setIsFetching = createAction(SET_IS_FETCHING, function prepare(boolean) {
    return {
        payload: {
            isFetching: boolean
        }
    }
});

export const followUser = createAction(FOLLOW_USER, function prepare(userID) {
    return {
        payload: {
            userID
        }
    }
});

export const unfollowUser = createAction(UNFOLLOW_USER, function prepare(userID) {
    return {
        payload: {
            userID
        }
    }
});

const usersPageReducer = createReducer(initialState, (builder) => {
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
        .addCase(setIsFetching, (state = initialState, action) => {
            return {
                ...state,
                isFetching: action.payload.isFetching
            }
        })
        .addCase(followUser, (state = initialState, action) => {
            return state;
        })
        .addCase(unfollowUser, (state = initialState, action) => {
            return state;
        })
        .addDefaultCase((state = initialState, action) => {
            return state;
        });
});

export default usersPageReducer;
