export default function PostFooter() {
    return (
        <div className="post-footer flex gap-2">
            <button className="px-2 py-1 bg-neutral-400 rounded-xl">
                Like
            </button>
            <button className="px-2 py-1 bg-neutral-400 rounded-xl">
                Comment
            </button>
            <button className="px-2 py-1 bg-neutral-400 rounded-xl">
                Repost
            </button>
        </div>
    );
}
