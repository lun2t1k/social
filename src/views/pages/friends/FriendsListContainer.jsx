import React from "react"
import { connect } from "react-redux"
import { requestFriends, getFriends, getIsFetchingFriends } from '../../../redux/ducks/friends'
import FriendsList from "./FriendsList"

class FriendsListContainer extends React.Component {
    componentDidMount() {
        this.props.requestFriends()
    }
    render() {
        return <FriendsList friends={ this.props.friends } isFetchingFriends={ this.props.isFetchingFriends } />
    }
}

const mapStateToProps = state => {
    return {
        friends: getFriends(state),
        isFetchingFriends: getIsFetchingFriends(state)
    }
}

export default connect(mapStateToProps, { requestFriends })(FriendsListContainer)
