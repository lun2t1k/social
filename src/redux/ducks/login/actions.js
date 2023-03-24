import { createAction } from '@reduxjs/toolkit'
import * as types from './types'

export const setUserData = createAction(types.SET_USER_DATA, function prepare(userId, login, email, isAuth) {
    return {
        payload: { userId, login, email, isAuth }
    }
})

export const setUserProfile = createAction(types.SET_USER_PROFILE, function prepare(profile) {
    return {
        payload: { profile }
    }
})

export const setUserPhoto = createAction(types.SET_USER_PHOTO, function prepare(photos) {
    return {
        payload: { photos }
    }
})

export const setUserStatus = createAction(types.SET_USER_STATUS, function prepare(status) {
    return {
        payload: { status }
    }
})

export const addNewPost = createAction(types.ADD_NEW_POST, function prepare(newPostText) {
    return {
        payload: {
            text: newPostText
        }
    }
})
