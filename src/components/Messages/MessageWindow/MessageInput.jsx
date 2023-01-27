export default function MessageInput() {
    return (
        <form className="w-full flex items-end p-5">
            <input
                type="text"
                name=""
                id=""
                placeholder="Message"
                className="p-3 border-2 rounded-xl flex-auto mr-3 focus:border-purple-accent outline-none"
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
