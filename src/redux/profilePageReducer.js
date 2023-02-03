const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export const updateNewPostTextActionCreator = (postText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: postText
    }
}

export const addNewPostActionCreator = () => {
    return { type: ADD_POST }
}

export default function profilePageReducer(state, action) {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        case ADD_POST:
            let newPost = {
                id: 'post' + (state.posts.length + 1),
                text: state.newPostText,
                likesAmount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}
