export default function UsersSearch(props) {
    return (
        <form className="w-full flex items-center gap-5 mb-6">
            <input
                type="search"
                name=""
                id=""
                placeholder="Search users"
                className="p-3 border-2 rounded-xl flex-auto focus:border-violet-500"
            />
            <button
                type="submit"
                className="px-6 py-3 h-fit rounded-xl text-xl text-white bg-violet-500 transition-all ease-in hover:bg-violet-600 disabled:bg-gray-500 disabled:hover:bg-gray-500"
            >
                Search
            </button>
        </form>
    );
}
