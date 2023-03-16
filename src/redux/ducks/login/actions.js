import { createAction } from '@reduxjs/toolkit'
import * as types from './types'

export const setUserData = createAction(types.SET_USER_DATA, function prepare(userId, login, email, isAuth) {
    return {
        payload: { userId, login, email, isAuth }
    }
})
