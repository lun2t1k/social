import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'

export default function Post({
    postId,
    userPhoto,
    userName = '__username__',
    postTitle,
    postBody,
    postLikesAmount,
    postCommentsAmount,
    postSharesAmount
}) {
    return (
        <div
            id={ postId }
            className='mb-5 w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-5'
        >
            <PostHeader userPhoto={ userPhoto } userName={ userName } />
            <PostBody postTitle={ postTitle } postBody={ postBody } />
            <PostFooter
                postLikesAmount={ postLikesAmount }
                postCommentsAmount={ postCommentsAmount }
                postSharesAmount={ postSharesAmount }
            />
        </div>
    )
}
