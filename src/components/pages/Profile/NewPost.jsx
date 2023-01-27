import Button from "../../Button";

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
                        <Button
                            type="submit"
                            title="Add Post"
                            disabled={false}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
