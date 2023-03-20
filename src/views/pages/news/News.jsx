import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getNews } from '../../../redux/ducks/news'
import NewsSkeleton from './NewsSkeleton'
import Post from '../../components/post/Post'

const News = ({ news, isFetchingNews, getNews }) => {
    useEffect(() => {
        getNews()
    }, [getNews])

    return (
        <div className='flex flex-col gap-5'>
            { isFetchingNews ? (
                <NewsSkeleton />
            ) : (
                <>
                    { news.map(post => {
                        return (
                            <Post
                                key={ post.id }
                                post={ post }
                                userPhoto={ post.userPhoto }
                                userName={ post.userName }
                            />
                        )
                    }) }
                </>
            ) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news.news,
        isFetchingNews: state.news.isFetchingNews,
    }
}

export default connect(mapStateToProps, { getNews })(News)
