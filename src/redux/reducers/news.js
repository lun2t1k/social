import { createAction, createReducer } from '@reduxjs/toolkit'
import { swalError } from './../../helpers/swal'
import news from '../../api/news'

const SET_NEWS = 'SET_NEWS'
const SET_IS_FETCHING_NEWS = 'SET_IS_FETCHING_NEWS'

let initialState = {
    news: [],
    isFetchingNews: false
}

const STATUS_CODE = {
    SUCCESS: 200,
    ERROR: 1
}

const setNews = createAction(SET_NEWS, function prepare(news) {
    return {
        payload: { news }
    }
})


const setIsFetchingNews = createAction(SET_IS_FETCHING_NEWS, function prepare(boolean) {
    return {
        payload: {
            isFetchingNews: boolean
        }
    }
})

export const getNews = () => {
    return dispatch => {
        dispatch(setIsFetchingNews(true))
        news.getNewsRequest().then(response => {
            if (response.status === STATUS_CODE.SUCCESS) {
                dispatch(setNews(response.data))
                dispatch(setIsFetchingNews(false))
            }
        }).catch(error => {
            swalError(error)
        })
    }
}

const newsPage = createReducer(initialState, builder => {
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
        .addDefaultCase((state = initialState, action) => {
            return state
        })
})

export default newsPage
