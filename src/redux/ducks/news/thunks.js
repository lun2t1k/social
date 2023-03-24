import { setIsFetchingNews, setNews } from './actions'
import { swalError } from '../../../utils/swal'
import news from '../../../api/news'

export const getNews = () => dispatch => {
    dispatch(setIsFetchingNews(true))
    news.getNewsRequest().then(response => {
        if (response.status === 200) {
            dispatch(setNews(response.data))
            dispatch(setIsFetchingNews(false))
        }
    }).catch(error => {
        swalError(error)
    })
}
