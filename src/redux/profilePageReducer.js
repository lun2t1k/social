import { createAction, createReducer } from '@reduxjs/toolkit';

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';

let initialState = {
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

// export const updateNewPostText = (postText) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newPostText: postText
//     }
// }

// export const addNewPost = () => {
//     return { type: ADD_POST }
// }

// export default function profilePageReducer(state = initialState, action) {
//     switch (action.type) {
//         case UPDATE_NEW_POST_TEXT:
//             state.newPostText = action.newPostText;
//             return state;
//         case ADD_POST:
//             let newPost = {
//                 id: 'post' + (state.posts.length + 1),
//                 text: state.newPostText,
//                 likesAmount: 0
//             }
//             state.posts.push(newPost);
//             state.newPostText = '';
//             return state;
//         default:
//             return state;
//     }
// }

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
        .addCase(updateNewPostText, (state = initialState, action) => {
            state.newPostText = action.payload.newPostText;
            return state;
        })
        .addCase(addNewPost, (state = initialState, action) => {
            let newPost = {
                id: 'post' + (state.posts.length + 1),
                text: state.newPostText,
                likesAmount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        })
        .addDefaultCase((state = initialState, action) => {
            return state;
        })
});

export default profilePageReducer;
