export default function MessageInput() {
    return (
        <form className="w-full flex items-end pt-5 px-5 border-t-2">
            <input
                type="text"
                name=""
                id=""
                placeholder="Write a message..."
                className="p-3 border-2 rounded-xl flex-auto mr-3"
            />
            <button
                type="submit"
                className="px-6 py-3 h-fit rounded-xl text-xl text-white bg-purple-accent transition-all ease-in hover:bg-purple-accent--dark disabled:bg-gray-500 disabled:hover:bg-gray-500"
            >
                Send
            </button>
        </form>
    );
}
