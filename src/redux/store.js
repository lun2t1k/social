import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profilePageReducer from './profilePageReducer';
import messagesPageReducer from './messagesPageReducer';
import friendsPageReducer from './friendsPageReducer';

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    friendsPage: friendsPageReducer
});

let store = configureStore({
    reducer: reducers
});

export default store;
