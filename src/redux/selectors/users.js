import { createSelector } from 'reselect'

const selectUsers = state => state.usersPage.users

export const getUsers = createSelector(selectUsers, user => user)
export const getPageSize = state => state.usersPage.pageSize
export const getTotalCount = state => state.usersPage.totalCount
export const getCurrentPage = state => state.usersPage.currentPage
export const getIsFetchingUsers = state => state.usersPage.isFetchingUsers
export const getFollowingQueue = state => state.usersPage.followingQueue
