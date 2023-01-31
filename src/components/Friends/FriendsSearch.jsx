export default function FriendsSearch(props) {
    return (
        <form className="w-full flex items-center gap-5 mb-6">
            <input
                type="search"
                name=""
                id=""
                placeholder="Search friends"
                className="p-3 border-2 rounded-xl flex-auto focus:border-purple-accent"
            />
            <button
                type="submit"
                className="px-6 py-3 h-fit rounded-xl text-xl text-white bg-purple-accent transition-all ease-in hover:bg-purple-accent--dark disabled:bg-gray-500 disabled:hover:bg-gray-500"
            >
                Search
            </button>
        </form>
    );
}
