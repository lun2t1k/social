import { createAction } from '@reduxjs/toolkit'
import * as types from './types'

export const setMessages = createAction(types.SET_MESSAGES, function prepare(userID) {
    return {
        payload: { userID }
    }
})

export const sendNewMessage = createAction(types.SEND_NEW_MESSAGE, function prepare(newMessageText, newMessageTime) {
    return {
        payload: {
            messageText: newMessageText,
            messageTime: newMessageTime
        }
    }
})
