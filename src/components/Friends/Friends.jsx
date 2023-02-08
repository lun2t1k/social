import FriendsSearch from "./FriendsSearch";
import FriendsListContainer from "./FriendsListContainer";

export default function Friends(props) {
    return (
        <div className="w-full p-5 bg-white rounded-3xl overflow-hidden">
            <FriendsSearch />
            <FriendsListContainer />
        </div>
    );
}
