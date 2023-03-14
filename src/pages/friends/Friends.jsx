import FriendsSearch from "./FriendsSearch"
import FriendsList from "./FriendsListContainer"
import UsersList from './suggestions/UsersListContainer'

export default function Friends() {
    return (
        <div className="relative flex flex-col lg:flex-row w-full gap-5">
            <div className="w-full lg:w-2/3 overflow-hidden rounded-3xl bg-white p-5 dark:bg-zinc-900">
                <FriendsSearch />
                <FriendsList />
            </div>
            <div className="sticky top-[76px] w-full lg:w-1/3 overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 p-5 h-fit">
                <UsersList />
            </div>
        </div>
    )
}
