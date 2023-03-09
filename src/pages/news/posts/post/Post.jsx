import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

export default function Post(props) {
    return (
        <div
            id={props.id}
            className="mb-5 w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-5"
        >
            <PostHeader userPhoto={props.userPhoto} userName={props.userName} />
            <PostBody postTitle={props.title} postBody={props.body} />
            <PostFooter
                postLikesAmount={props.postLikesAmount}
                postCommentsAmount={props.postCommentsAmount}
                postSharesAmount={props.postSharesAmount}
            />
        </div>
    );
}
