const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const updateNewMessageTextActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: messageText
    }
}

export const sendNewMessageActionCreator = () => {
    return { type: SEND_MESSAGE }
}

export default function messagesPageReducer(state, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 'message' + (state.messages.length + 1),
                messageType: 'user',
                messageText: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }
}
