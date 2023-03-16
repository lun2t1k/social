import { connect } from 'react-redux'
import Post from '../../components/post/Post'

const Posts = ({ posts, ...props }) => {
    return (
        <div className="posts flex flex-col-reverse">
            { posts.map(post => {
                return (
                    <Post
                        key={ post.id }
                        postId={ post.id }
                        userId={ post.userId }
                        userPhoto={ props.userPhoto }
                        userName={ props.userName }
                        postTitle={ post.title }
                        postBody={ post.body }
                        postLikesAmount={ post.likesAmount }
                        postCommentsAmount={ post.commentsAmount }
                        postSharesAmount={ post.sharesAmount }
                    />
                )
            }) }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.profile.posts,
    }
}

export default connect(mapStateToProps)(Posts)
