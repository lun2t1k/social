import { combineReducers, configureStore } from '@reduxjs/toolkit';
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
    reducer: reducers
});

window.state = store.getState();

export default store;
