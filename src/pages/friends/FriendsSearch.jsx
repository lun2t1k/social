export default function FriendsSearch() {
    return (
        <form className="mb-5 flex w-full items-center gap-5">
            <input
                type="search"
                name=""
                id=""
                placeholder="Search friends"
                className="flex-auto rounded-xl border dark:border-zinc-700 py-2 px-3 outline-none bg-transparent focus:border-violet-400 dark:focus:border-violet-400"
            />
            <button
                type="submit"
                className="h-fit rounded-xl border border-violet-400 bg-violet-400 p-2 sm:px-5 sm:py-2 font-semibold text-white transition-all ease-in hover:border-violet-500 hover:bg-violet-500 disabled:bg-gray-400 disabled:hover:bg-gray-400"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={ 1.5 }
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
    )
}
