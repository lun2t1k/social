import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

export default function Post(props) {
    return (
        <div id={props.postID} className="mb-5 first:mb-0">
            <div className="w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-5">
                <PostHeader userPhoto={props.userPhoto} userName={props.userName} />
                <PostBody postText={props.postText} />
                <PostFooter
                    postLikesAmount={props.postLikesAmount}
                    postCommentsAmount={props.postCommentsAmount}
                    postSharesAmount={props.postSharesAmount}
                />
            </div>
        </div>
    );
}
