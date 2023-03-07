import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import profilePage from './reducers/profile';
import messagesPage from './reducers/messages';
import usersPage from './reducers/users';

const reducers = combineReducers({ auth, profilePage, messagesPage, usersPage });

const store = configureStore({
    reducer: reducers,
    middleware: [thunk]
});

export default store;
