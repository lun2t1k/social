import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './authReducer';
import profilePageReducer from './profilePageReducer';
import messagesPageReducer from './messagesPageReducer';
import usersPageReducer from './usersPageReducer';

let reducers = combineReducers({
    auth: authReducer,
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer
});

let store = configureStore({
    reducer: reducers,
    middleware: [thunk]
});

export default store;
