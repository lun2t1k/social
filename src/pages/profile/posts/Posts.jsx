import { connect } from "react-redux";
import Post from "./post/Post";

const PostsContainer = (props) => {
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

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

const Posts = connect(mapStateToProps)(PostsContainer);

export default Posts;
