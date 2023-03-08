import FriendsSearch from "./FriendsSearch";
import FriendsListContainer from "./FriendsListContainer";
import UsersListContainer from './suggestions/UsersListContainer';

export default function Friends(props) {
    return (
        <div className="relative flex flex-col lg:flex-row w-full gap-5">
            <div className="w-full lg:w-2/3 overflow-hidden rounded-3xl bg-white p-5">
                <FriendsSearch />
                <FriendsListContainer />
            </div>
            <div className="sticky top-[76px] w-full lg:w-1/3 overflow-hidden rounded-3xl bg-white p-5 h-fit">
                <UsersListContainer />
            </div>
        </div>
    );
}
