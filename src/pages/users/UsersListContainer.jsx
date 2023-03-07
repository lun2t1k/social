import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/reducers/users';
import UsersList from './UsersList';

class UsersListAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(1);
    }
    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    render() {
        return (
            <UsersList
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingQueue={this.props.followingQueue}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingQueue: state.usersPage.followingQueue
    };
};

const UsersListContainer = connect(mapStateToProps, {follow, unfollow, getUsers})(UsersListAPI);

export default UsersListContainer;
