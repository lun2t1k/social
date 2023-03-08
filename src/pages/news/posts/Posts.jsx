import NewsLoader from "../NewsLoader";
import Post from "./post/Post";

const Posts = (props) => {
    return (
        <div>
            {props.isFetchingNews ? (
                <NewsLoader />
            ) : (
                <>
                    {props.news.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                id={post.id}
                                userId={post.userId}
                                title={post.title}
                                body={post.body}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default Posts;
