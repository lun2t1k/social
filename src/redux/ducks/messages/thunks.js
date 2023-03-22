import { setMessages, sendNewMessage } from './actions'

export const selectChat = userID => dispatch => {
    dispatch(setMessages(userID))
}

export const sendMessage = (messageText, messageTime) => dispatch => {
    dispatch(sendNewMessage(messageText, messageTime))
}
