export default function NewPost() {
    return (
        <div className="add-post w-full bg-white rounded-3xl overflow-hidden">
            <div className="p-5">
                <form>
                    <h3 className="mb-3 text-2xl">What's new?</h3>
                    <textarea
                        name="newPost"
                        id="newPost"
                        cols="30"
                        rows="10"
                        className="w-full max-h-[200px] min-h-[100px] p-3 border-2 rounded-xl text-lg mb-3"
                    ></textarea>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-lg text-xl text-white bg-purple-accent transition-all ease-in hover:bg-purple-accent--dark disabled:bg-gray-500 disabled:hover:bg-gray-500"
                        >
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
