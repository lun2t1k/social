import { createAction, createReducer } from '@reduxjs/toolkit'
import { swalError } from './../../helpers/swal'
import profile from '../../api/profile'

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const ADD_POST = 'ADD_POST'
const STATUS_CODE = {
    SUCCESS: 200,
    ERROR: 1
}

let initialState = {
    profile: null,
    status: '',
    posts: [
        {
            id: 'post' + 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta ex ut suscipit euismod. In ultricies pharetra purus. Aliquam elementum leo vitae ultrices ullamcorper. In in egestas dolor. Donec pellentesque egestas diam vitae egestas. Maecenas a aliquam sem. Nam mattis fringilla eros, eu tristique ex interdum id. Donec ut porttitor magna.",
            likesAmount: 374
        },
        {
            id: 'post' + 2,
            text: "Duis rutrum mattis odio, sit amet consequat ipsum mollis convallis. Nulla consectetur metus nec finibus blandit. Fusce sapien orci, commodo at euismod quis, varius ut tortor.",
            likesAmount: 923
        },
        {
            id: 'post' + 3,
            text: "Nulla venenatis, lectus vitae fermentum vestibulum, tortor libero eleifend mi, nec rutrum purus erat congue ex. Morbi venenatis non enim nec fringilla. Ut convallis pellentesque ante, a sollicitudin tellus malesuada nec. Nunc mauris erat, gravida nec vestibulum ut, iaculis ut nisi. Nulla eu finibus urna. Pellentesque sed odio et lorem ullamcorper consectetur in id nisi. Donec egestas volutpat pharetra. Curabitur a leo nec sapien consequat maximus. Integer nec lectus felis. Ut eget interdum augue. Aenean tincidunt lorem eget accumsan sodales. Aliquam ultrices erat sed risus tincidunt rutrum. Proin ut dictum est. Ut luctus enim massa, a mollis ligula efficitur et. Vivamus nec placerat velit, vel auctor nunc.",
            likesAmount: 756
        }
    ]
}

const setUserProfile = createAction(SET_USER_PROFILE, function prepare(id) {
    return {
        payload: { id }
    }
})

const setUserStatus = createAction(SET_USER_STATUS, function prepare(statusText) {
    return {
        payload: {
            status: statusText
        }
    }
})

export const addNewPost = createAction(ADD_POST, function prepare(postText) {
    return {
        payload: { postText }
    }
})

export const setProfile = id => {
    return dispatch => {
        profile.getUserProfile(id)
            .then(response => {
                if (response.status === STATUS_CODE.SUCCESS) {
                    dispatch(setUserProfile(response.data))
                }
            })
    }
}

export const setStatus = id => {
    return dispatch => {
        profile.getUserStatus(id)
            .then(response => {
                if (response.data === null) {
                    dispatch(setUserStatus(''))
                } else {
                    dispatch(setUserStatus(response.data))
                }
            })
    }
}

export const updateStatus = status => {
    return dispatch => {
        profile.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === STATUS_CODE.SUCCESS) {
                    dispatch(setUserStatus(status))
                }
            })
            .catch(error => {
                swalError(error)
            })
    }
}

const profilePage = createReducer(initialState, builder => {
    builder
        .addCase(setUserProfile, (state = initialState, action) => {
            return { ...state, profile: action.payload.id }
        })
        .addCase(setUserStatus, (state = initialState, action) => {
            return { ...state, status: action.payload.status }
        })
        .addCase(addNewPost, (state = initialState, action) => {
            let newPost = {
                id: 'post' + (state.posts.length + 1),
                text: action.payload.postText,
                likesAmount: 0
            }
            return { ...state, posts: [...state.posts, newPost] }
        })
        .addDefaultCase((state = initialState, action) => {
            return state
        })
})

export default profilePage
