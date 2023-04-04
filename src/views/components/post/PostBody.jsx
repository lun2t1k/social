export default function PostBody({postTitle, postBody}) {
    return (
        <div className='mb-4'>
            <h5 className='mb-1 font-semibold'>{postTitle}</h5>
            <p>{postBody}</p>
        </div>
    )
}
