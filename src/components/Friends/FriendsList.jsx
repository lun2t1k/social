import FriendsItem from "./FriendsItem";

export default function FriendsList(props) {
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
