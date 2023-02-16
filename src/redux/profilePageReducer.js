import { createAction, createReducer } from '@reduxjs/toolkit';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
    profile: null,
    newPostText: '',
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

export const setUserProfile = createAction(SET_USER_PROFILE, function prepare(userID) {
    return {
        payload: {
            profile: userID
        }
    }
});

export const updateNewPostText = createAction(UPDATE_NEW_POST_TEXT, function prepare(postText) {
    return {
        payload: {
            newPostText: postText
        }
    }
});

export const addNewPost = createAction(ADD_POST);

const profilePageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setUserProfile, (state = initialState, action) => {
            return { ...state, profile: action.payload.profile }
        })
        .addCase(updateNewPostText, (state = initialState, action) => {
            return { ...state, newPostText: action.payload.newPostText };
        })
        .addCase(addNewPost, (state = initialState, action) => {
            let newPost = {
                id: 'post' + (state.posts.length + 1),
                text: state.newPostText,
                likesAmount: 0
            }
            return { ...state, newPostText: '', posts: [...state.posts, newPost] };
        })
        .addDefaultCase((state = initialState, action) => {
            return state;
        })
});

export default profilePageReducer;
