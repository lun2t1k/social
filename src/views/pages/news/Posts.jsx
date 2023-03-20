import NewsLoader from './NewsLoader'
import Post from '../../components/post/Post'

export default function Posts({ isFetchingNews, news }) {
    return (
        <div className='flex flex-col gap-5'>
            { isFetchingNews ? (
                <NewsLoader />
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
