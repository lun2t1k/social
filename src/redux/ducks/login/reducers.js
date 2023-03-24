import { createReducer } from '@reduxjs/toolkit'
import { setUserData } from './actions'

const initialState = {
    userId: 27904,
    login: null,
    email: null,
    isAuth: true
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
