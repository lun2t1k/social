import { sendNewMessage } from './actions'

export const sendMessage = messageText => dispatch => {
    dispatch(sendNewMessage(messageText))
}
