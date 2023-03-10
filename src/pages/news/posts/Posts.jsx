import NewsLoader from "../NewsLoader"
import Post from "./post/Post"

export default function Posts(props) {
    return (
        <div>
            { props.isFetchingNews ? (
                <NewsLoader />
            ) : (
                <>
                    { props.news.map(post => {
                        return (
                            <Post
                                key={ post.id }
                                id={ post.id }
                                userID={ post.userID }
                                title={ post.title }
                                body={ post.body }
                            />
                        )
                    }) }
                </>
            ) }
        </div>
    )
}
