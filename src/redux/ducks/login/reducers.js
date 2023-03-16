import { createReducer } from '@reduxjs/toolkit'
import { setUserData } from './actions'

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: true,
    authorizedUserId: 27904
}

const loginReducer = createReducer(initialState, builder => {
    builder
        .addCase(setUserData, (state = initialState, action) => {
            return {
                ...state,
                ...action.payload
            }
        })
        .addDefaultCase((state = initialState) => {
            return state
        })
})

export default loginReducer
