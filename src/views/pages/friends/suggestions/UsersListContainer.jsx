import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, requestUsers } from '../../../../redux/ducks/friends'
import { 
    getUsers, 
    getPageSize, 
    getTotalCount, 
    getCurrentPage, 
    getIsFetchingUsers, 
    getFollowingQueue 
} from '../../../../redux/ducks/friends'
import UsersList from './UsersList'

class UsersListContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(1)
    }
    onPageChange = pageNumber => {
        this.props.requestUsers(pageNumber)
    }
    render() {
        return (
            <UsersList
                users={ this.props.users }
                pageSize={ this.props.pageSize }
                totalCount={ this.props.totalCount }
                currentPage={ this.props.currentPage }
                isFetchingUsers={ this.props.isFetchingUsers }
                onPageChange={ this.onPageChange }
                follow={ this.props.follow }
                unfollow={ this.props.unfollow }
                followingQueue={ this.props.followingQueue }
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetchingUsers: getIsFetchingUsers(state),
        followingQueue: getFollowingQueue(state)
    }
}

export default connect(mapStateToProps, { follow, unfollow, requestUsers })(UsersListContainer)
