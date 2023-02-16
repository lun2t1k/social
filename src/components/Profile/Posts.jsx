import Post from './Post';

export default function Posts(props) {
    return (
        <div className="posts flex flex-col-reverse">
            {props.posts.map((post) => {
                return (
                    <Post
                        key={post.id}
                        postID={post.id}
                        userPhoto={props.userPhoto}
                        userName={props.userName}
                        postText={post.text}
                        postLikesAmount={post.likesAmount}
                    />
                );
            })}
        </div>
    );
}
