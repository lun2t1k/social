import Like from './postActions/Like'
import Comment from './postActions/Comment'
import Share from './postActions/Share'

export default function PostFooter({ postLikesAmount, postCommentsAmount, postSharesAmount }) {
    return (
        <div className="flex gap-2">
            <Like postLikesAmount={ postLikesAmount } />
            <Comment postCommentsAmount={ postCommentsAmount } />
            <Share postSharesAmount={ postSharesAmount } />
        </div>
    )
}
