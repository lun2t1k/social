import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import * as reducers from './ducks'

const rootReducer = combineReducers(reducers)

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

// ! Remove when deploying on prod
window.state = store.getState()

export default store
