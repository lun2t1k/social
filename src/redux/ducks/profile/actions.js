import { createAction } from '@reduxjs/toolkit'
import * as types from './types'

export const setUserProfile = createAction(types.SET_USER_PROFILE, function prepare(profile) {
    return {
        payload: { profile }
    }
})

export const setUserStatus = createAction(types.SET_USER_STATUS, function prepare(status) {
    return {
        payload: { status }
    }
})
