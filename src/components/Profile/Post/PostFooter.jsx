import CommentButton from "./PostActions/CommentButton";
import LikeButton from "./PostActions/LikeButton";
import RepostButton from "./PostActions/RepostButton";

export default function PostFooter(props) {
    return (
        <div className="flex gap-2">
            <LikeButton likes={props.likesAmount} />
            <CommentButton />
            <RepostButton />
        </div>
    );
}
