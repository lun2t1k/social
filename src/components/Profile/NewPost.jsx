import { createRef } from "react";

export default function NewPost(props) {
    let newPostTextarea = createRef();

    let addNewPost = (event) => {
        event.preventDefault();
        // props.addNewPost();
        props.dispatch({ type: "ADD-POST" });
    };

    let onChangeNewPostText = () => {
        let text = newPostTextarea.current.value;
        // props.updateNewPostText(text);
        props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
    };

    return (
        <div className="add-post w-full bg-white rounded-3xl overflow-hidden">
            <div className="p-5">
                <form onSubmit={addNewPost}>
                    <h3 className="mb-3 text-2xl">What's new?</h3>
                    <textarea
                        name="newPost"
                        id="newPost"
                        cols="30"
                        rows="10"
                        ref={newPostTextarea}
                        onChange={onChangeNewPostText}
                        value={props.newPostText}
                        required
                        className="w-full max-h-[200px] min-h-[100px] p-3 border-2 rounded-xl text-lg mb-3 focus:border-purple-accent"
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
