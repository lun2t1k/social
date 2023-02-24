import { createAction, createReducer } from '@reduxjs/toolkit';
import usersAPI from './../api/usersAPI';

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_FOLLOWING_PROCESS = 'SET_IS_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProcess: false,
    followingQueue: []
};

const setUsers = createAction(SET_USERS, function prepare(users) {
    return {
        payload: {
            users: users
        }
    }
});

const setTotalUsersCount = createAction(SET_TOTAL_USERS_COUNT, function prepare(totalUsersNumber) {
    return {
        payload: {
            totalCount: totalUsersNumber
        }
    }
});

const setCurrentPage = createAction(SET_CURRENT_PAGE, function prepare(currentPageNumber) {
    return {
        payload: {
            currentPage: currentPageNumber
        }
    }
});

const setIsFetching = createAction(SET_IS_FETCHING, function prepare(boolean) {
    return {
        payload: {
            isFetching: boolean
        }
    }
});

const followUser = createAction(FOLLOW_USER, function prepare(userID) {
    return {
        payload: {
            id: userID
        }
    }
});

const unfollowUser = createAction(UNFOLLOW_USER, function prepare(userID) {
    return {
        payload: {
            id: userID
        }
    }
});

const setIsFollowingProcess = createAction(SET_IS_FOLLOWING_PROCESS, function prepare(boolean, userID) {
    return {
        payload: {
            isFollowingProcess: boolean,
            userID: userID
        }
    }
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(true));
        usersAPI.getUsersRequest(currentPage, pageSize).then((data) => {
            dispatch(setUsers(data.items));
            dispatch(setIsFetching(false));
            if (data.totalCount > 100) {
                dispatch(setTotalUsersCount(99));
            } else {
                dispatch(setTotalUsersCount(data.totalCount));
            }
        }).catch((error) => {
            alert(error);
        });
    }
}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(setIsFollowingProcess(true, userID));
        usersAPI.followUserRequest(userID).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followUser(userID));
            }
            dispatch(setIsFollowingProcess(false, userID));
        }).catch((error) => {
            alert(error);
            dispatch(setIsFollowingProcess(false, userID));
        });
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(setIsFollowingProcess(true, userID));
        usersAPI.unfollowUserRequest(userID).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followUser(userID));
            }
            dispatch(setIsFollowingProcess(false, userID));
        }).catch((error) => {
            alert(error);
            dispatch(setIsFollowingProcess(false, userID));
        });
    }
}

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
            // ! Error -> payload: {userID: undefined}
            // ! The case doesn't receive the user id from action creator
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        })
        .addCase(unfollowUser, (state = initialState, action) => {
            // ! Error -> payload: {userID: undefined}
            // ! The case doesn't receive the user id from action creator
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        })
        .addCase(setIsFollowingProcess, (state = initialState, action) => {
            return {
                ...state,
                isFollowingProcess: action.payload.isFollowingProcess,
                followingQueue: action.payload.isFollowingProcess
                    ? [...state.followingQueue, action.payload.userID]
                    : state.followingQueue.filter(userID => userID !== action.payload.userID)
            }
        })
        .addDefaultCase((state = initialState, action) => {
            return state;
        });
});

export default usersPageReducer;
