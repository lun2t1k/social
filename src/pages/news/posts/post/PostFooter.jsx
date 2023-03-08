import Like from "./postActions/Like";
import Comment from "./postActions/Comment";
import Share from "./postActions/Share";

export default function PostFooter(props) {
    return (
        <div className="flex gap-2">
            <Like postLikesAmount={props.postLikesAmount} />
            <Comment postCommentsAmount={props.postCommentsAmount} />
            <Share postSharesAmount={props.postSharesAmount} />
        </div>
    );
}
