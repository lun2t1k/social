export default function PostBody({ postTitle, postBody }) {
    return (
        <div className="mb-4">
            <h5 className="font-semibold mb-1">{ postTitle }</h5>
            <p>{ postBody }</p>
        </div>
    )
}
