import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function Post(props) {
    return (
        <div className="post mb-4">
            <div className="w-full bg-white rounded-2xl overflow-hidden p-5">
                <PostHeader
                    userAvatar={props.postUserAvatar}
                    userName={props.postUserName}
                />
                <PostBody text={props.postText} />
                <PostFooter likesAmount={props.postLikesAmount} />
            </div>
        </div>
    );
}
