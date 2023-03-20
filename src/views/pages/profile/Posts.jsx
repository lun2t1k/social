import { connect } from 'react-redux'
import { getPosts } from '../../../redux/ducks/profile/selectors'
import Post from '../../components/post/Post'

const Posts = ({ posts, ...props }) => {
    return (
        <div className='flex flex-col-reverse gap-5'>
            { posts.map(post => {
                return (
                    <Post
                        key={ post.id }
                        post={ post }
                        userPhoto={ props.userPhoto }
                        userName={ props.userName }
                    />
                )
            }) }
        </div>
    )
}

const mapStateToProps = state => ({ posts: getPosts(state) })

export default connect(mapStateToProps, null)(Posts)
