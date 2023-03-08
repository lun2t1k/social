import { createAction, createReducer } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import users from '../../api/users';

const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_IS_FETCHING_USERS = 'SET_IS_FETCHING_USERS';
const SET_IS_FOLLOWING_PROCESS = 'SET_IS_FOLLOWING_PROCESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetchingUsers: false,
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

const setIsFetchingUsers = createAction(SET_IS_FETCHING_USERS, function prepare(boolean) {
    return {
        payload: {
            isFetchingUsers: boolean
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
        dispatch(setIsFetchingUsers(true));
        users.getUsersRequest(currentPage, pageSize).then((data) => {
            dispatch(setUsers(data.items));
            dispatch(setIsFetchingUsers(false));
            dispatch(setTotalUsersCount(data.totalCount));
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

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(setIsFollowingProcess(true, userID));
        users.followUserRequest(userID).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followUser(userID));
            }
            dispatch(setIsFollowingProcess(false, userID));
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
            dispatch(setIsFollowingProcess(false, userID));
        });
    }
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(setIsFollowingProcess(true, userID));
        users.unfollowUserRequest(userID).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followUser(userID));
            }
            dispatch(setIsFollowingProcess(false, userID));
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
            dispatch(setIsFollowingProcess(false, userID));
        });
    }
}

const usersPage = createReducer(initialState, (builder) => {
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

export default usersPage;
