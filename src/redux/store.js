import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import auth from './reducers/auth'
import profilePage from './reducers/profile'
import newsPage from './reducers/news'
import messagesPage from './reducers/messages'
import usersPage from './reducers/users'
import friendsPage from './reducers/friends'

const reducers = combineReducers({
    auth,
    profilePage,
    newsPage,
    messagesPage,
    usersPage,
    friendsPage
})

const store = configureStore({
    reducer: reducers,
    middleware: [thunk]
})

export default store
