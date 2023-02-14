import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profilePageReducer from './profilePageReducer';
import messagesPageReducer from './messagesPageReducer';
import usersPageReducer from './usersPageReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer
});

let store = configureStore({
    reducer: reducers
});

export default store;
