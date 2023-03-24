import { createReducer } from '@reduxjs/toolkit'
import { setUserProfile, setUserStatus } from './actions'

const initialState = {
    profile: null,
    status: '',
}

const profileReducer = createReducer(initialState, builder => {
    builder
        .addCase(setUserProfile, (state = initialState, action) => {
            return { ...state, profile: action.payload.profile }
        })
        .addCase(setUserStatus, (state = initialState, action) => {
            return { ...state, status: action.payload.status }
        })
        .addDefaultCase((state = initialState) => {
            return state
        })
})

export default profileReducer
