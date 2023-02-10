import axios from "axios";
import FriendsItem from "./FriendsItem";

export default function FriendsList(props) {
    if (props.friends.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => console.log(response));
    }

    let friendsList = props.friends.map((friend) => (
        <FriendsItem
            key={friend.id}
            id={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            status={friend.status}
        />
    ));

    return <ul>{friendsList}</ul>;
}
