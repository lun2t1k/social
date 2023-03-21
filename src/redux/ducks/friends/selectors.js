import { createSelector } from 'reselect'

const selectFriends = state => state.friends.friends.friends
const selectUsers = state => state.friends.suggestions.users

export const getFriends = createSelector(selectFriends, friend => friend)
export const getIsFetchingFriends = state => state.friends.friends.isFetchingFriends

export const getUsers = createSelector(selectUsers, user => user)
export const getFriendsSuggestions = state => state.friends.suggestions
