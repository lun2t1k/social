import FriendsList from "./FriendsList";
import FriendsSearch from "./FriendsSearch";

export default function Friends(props) {
    return (
        <div className="w-full p-5 bg-white rounded-3xl overflow-hidden">
            <FriendsSearch />
            <FriendsList friendsData={props.state.friends} />
        </div>
    );
}
