import { createSelector } from 'reselect'

const selectFriends = state => state.friendsPage.friends

export const getFriends = createSelector(selectFriends, friend => friend)
export const getIsFetchingFriends = state => state.friendsPage.isFetchingFriends
