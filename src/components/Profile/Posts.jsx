import Post from "./Post/Post";

export default function Posts(props) {
    let postsElements = props.posts.map((post) => {
        return (
            <Post
                key={post.id}
                postID={post.id}
                postUserAvatar=""
                postUserName="User Name"
                postText={post.text}
                postLikesAmount={post.likesAmount}
            />
        );
    });

    return <div className="posts flex flex-col-reverse">{postsElements}</div>;
}
