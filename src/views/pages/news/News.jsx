import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNews } from '../../../redux/ducks/news'
import Posts from './Posts'

const News = ({ news, isFetchingNews, getNews}) => {
    useEffect(() => {
        getNews()
    }, [getNews])

    return <Posts news={ news } isFetchingNews={ isFetchingNews } />
}

const mapStateToProps = state => {
    return {
        news: state.news.news,
        isFetchingNews: state.news.isFetchingNews,
    }
}

export default connect(mapStateToProps, { getNews })(News)
