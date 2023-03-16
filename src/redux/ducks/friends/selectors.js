import { createSelector } from 'reselect'

const selectFriends = state => state.friends.friends.friends
const selectUsers = state => state.friends.suggestions.users

export const getFriends = createSelector(selectFriends, friend => friend)
export const getIsFetchingFriends = state => state.friends.friends.isFetchingFriends

export const getUsers = createSelector(selectUsers, user => user)
export const getPageSize = state => state.friends.suggestions.pageSize
export const getTotalCount = state => state.friends.suggestions.totalCount
export const getCurrentPage = state => state.friends.suggestions.currentPage
export const getIsFetchingUsers = state => state.friends.suggestions.isFetchingUsers
export const getFollowingQueue = state => state.friends.suggestions.followingQueue
