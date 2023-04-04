import Post from '../../components/post/Post'

export default function Posts({posts, userPhoto, userName}) {
    return (
        <div className='flex flex-col-reverse gap-5'>
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                    userPhoto={userPhoto}
                    userName={userName}
                />
            ))}
        </div>
    )
}
