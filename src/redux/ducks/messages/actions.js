import { createAction } from '@reduxjs/toolkit'
import * as types from './types'

export const sendNewMessage = createAction(types.SEND_NEW_MESSAGE, function prepare(newMessageText) {
    return {
        payload: { newMessageText }
    }
})
