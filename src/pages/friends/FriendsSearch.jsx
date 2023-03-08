export default function FriendsSearch(props) {
    return (
        <form className="mb-5 flex w-full items-center gap-5">
            <input
                type="search"
                name=""
                id=""
                placeholder="Search friends"
                className="flex-auto rounded-xl border-2 py-2 px-3 outline-none focus:border-violet-500"
            />
            <button
                type="submit"
                className="h-fit rounded-xl border-2 border-violet-500 bg-violet-500 p-2 sm:px-5 sm:py-2 font-semibold text-white transition-all ease-in hover:border-violet-600 hover:bg-violet-600 disabled:bg-gray-500 disabled:hover:bg-gray-500"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 sm:hidden"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <span className="hidden sm:inline">Search</span>
            </button>
        </form>
    );
}
