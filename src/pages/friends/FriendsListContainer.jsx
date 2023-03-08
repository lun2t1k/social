import React from "react";
import { connect } from "react-redux";
import { getFriends } from './../../redux/reducers/friends';
import FriendsList from "./FriendsList";

class FriendsListAPI extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }
    render() {
        return <FriendsList friends={this.props.friends} isFetching={this.props.isFetching} />;
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        isFetching: state.friendsPage.isFetching
    };
};

const FriendsListContainer = connect(mapStateToProps, { getFriends })(FriendsListAPI);

export default FriendsListContainer;
