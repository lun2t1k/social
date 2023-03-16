import { createReducer } from '@reduxjs/toolkit'
import { setIsFetchingNews, setNews } from './actions'

const initialState = {
    news: [],
    isFetchingNews: false
}

const newsReducer = createReducer(initialState, builder => {
    builder
        .addCase(setNews, (state = initialState, action) => {
            return {
                ...state,
                news: action.payload.news
            }
        })
        .addCase(setIsFetchingNews, (state = initialState, action) => {
            return {
                ...state,
                isFetchingNews: action.payload.isFetchingNews
            }
        })
        .addDefaultCase((state = initialState) => {
            return state
        })
})

export default newsReducer
