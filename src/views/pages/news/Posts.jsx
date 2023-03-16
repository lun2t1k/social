import NewsLoader from './NewsLoader'
import Post from '../../components/post/Post'

export default function Posts({ isFetchingNews, news }) {
    return (
        <div>
            { isFetchingNews ? (
                <NewsLoader />
            ) : (
                <>
                    { news.map(post => {
                        return (
                            <Post
                                key={ post.id }
                                postId={ post.id }
                                userId={ post.userId }
                                userPhoto={ post.userPhoto }
                                userName={ post.userName }
                                postTitle={ post.title }
                                postBody={ post.body }
                                postLikesAmount={ post.likesAmount }
                                postCommentsAmount={ post.commentsAmount }
                                postSharesAmount={ post.sharesAmount }
                            />
                        )
                    }) }
                </>
            ) }
        </div>
    )
}
