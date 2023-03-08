import { createAction, createReducer } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import news from '../../api/news';

const SET_NEWS = 'SET_NEWS';
const SET_IS_FETCHING_NEWS = 'SET_IS_FETCHING_NEWS';

let initialState = {
    news: [],
    isFetchingNews: false
}

const setNews = createAction(SET_NEWS, function prepare(news) {
    return {
        payload: { news }
    }
});


const setIsFetchingNews = createAction(SET_IS_FETCHING_NEWS, function prepare(boolean) {
    return {
        payload: {
            isFetchingNews: boolean
        }
    }
});

export const getNews = () => {
    return (dispatch) => {
        dispatch(setIsFetchingNews(true));
        news.getNewsRequest().then((data) => {
            dispatch(setNews(data));
            dispatch(setIsFetchingNews(false));
        }).catch((error) => {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                buttonsStyling: false,
                confirmButtonText: 'Ok',
                customClass: {
                    confirmButton: 'px-6 py-3 rounded-xl text-xl text-white bg-violet-500 transition-all ease-in hover:bg-violet-600 disabled:bg-gray-500 disabled:hover:bg-gray-500',
                }
            });
        });
    }
}

const newsPage = createReducer(initialState, (builder) => {
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
            return state;
        });
});

export default newsPage;
