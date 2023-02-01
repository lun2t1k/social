import FriendsItem from "./FriendsItem";

export default function FriendsList(props) {
    let friends = props.friendsData.map((friend) => (
        <FriendsItem
            key={friend.id}
            id={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            status={friend.status}
        />
    ));

    return <ul>{friends}</ul>;
}
