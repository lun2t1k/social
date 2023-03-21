import { componentWrapper } from '../../../helpers/theme'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'

export default function Post({ post, userPhoto, userName = '__username__' }) {
    return (
        <div id={ post.id } className={ componentWrapper.default }>
            <div className='p-5'>
                <PostHeader userPhoto={ userPhoto } userName={ userName } />
                <PostBody postTitle={ post.title } postBody={ post.body } />
                <PostFooter
                    postLikesAmount={ post.likesAmount }
                    postCommentsAmount={ post.commentsAmount }
                    postSharesAmount={ post.sharesAmount }
                />
            </div>
        </div>
    )
}
