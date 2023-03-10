export default function PostBody(props) {
    return (
        <div className="mb-4">
            <h5 className="font-semibold">{ props.postTitle }</h5>
            <p>{ props.postBody }</p>
        </div>
    )
}
