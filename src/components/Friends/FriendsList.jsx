import React from "react";
import axios from "axios";
import FriendsItem from "./FriendsItem";

class FriendsList extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => console.log(response));
    }
    render() {
        return (
            <>
                {this.props.friends.map((friend) => {
                    return (
                        <FriendsItem
                            key={friend.id}
                            id={friend.id}
                            name={friend.name}
                            avatar={friend.avatar}
                            status={friend.status}
                        />
                    );
                })}
            </>
        );
    }
}

export default FriendsList;

// export default function FriendsList(props) {
//     if (props.friends.length === 0) {
//         axios
//             .get("https://social-network.samuraijs.com/api/1.0/users")
//             .then((response) => console.log(response));
//     }

//     let friendsList = props.friends.map((friend) => (
//         <FriendsItem
//             key={friend.id}
//             id={friend.id}
//             name={friend.name}
//             avatar={friend.avatar}
//             status={friend.status}
//         />
//     ));

//     return <ul>{friendsList}</ul>;
// }
