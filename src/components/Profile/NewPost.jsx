import { createRef } from "react";

export default function NewPost(props) {
    let newPostTextarea = createRef();

    let onSubmitNewPost = (event) => {
        event.preventDefault();
        props.addNewPost();
    };

    let onChangeNewPostText = () => {
        let postText = newPostTextarea.current.value;
        props.updateNewPostText(postText);
    };

    return (
        <div className="add-post w-full bg-white rounded-3xl overflow-hidden">
            <div className="p-5">
                <form onSubmit={onSubmitNewPost}>
                    <h3 className="mb-3 text-2xl">What's new?</h3>
                    <textarea
                        name="newPostText"
                        id="newPostText"
                        cols="30"
                        rows="10"
                        ref={newPostTextarea}
                        onChange={onChangeNewPostText}
                        value={props.newPostText}
                        required
                        className="w-full max-h-[200px] min-h-[100px] p-3 border-2 rounded-xl text-lg mb-3 focus:border-violet-500"
                    ></textarea>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl text-xl text-white bg-violet-500 transition-all ease-in hover:bg-violet-600 disabled:bg-gray-500 disabled:hover:bg-gray-500"
                        >
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
