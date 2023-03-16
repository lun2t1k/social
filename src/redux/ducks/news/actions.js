import { createAction } from '@reduxjs/toolkit'
import * as types from './types'

export const setNews = createAction(types.SET_NEWS, function prepare(news) {
    return {
        payload: { news }
    }
})

export const setIsFetchingNews = createAction(types.SET_IS_FETCHING_NEWS, function prepare(boolean) {
    return {
        payload: {
            isFetchingNews: boolean
        }
    }
})
