import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    followUser,
    unfollowUser,
} from "../../redux/usersPageReducer";
import UsersList from "./UsersList";

class UsersListAPI extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                if (response.data.totalCount > 100) {
                    this.props.setTotalUsersCount(99);
                } else {
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            });
    }
    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
                if (response.data.totalCount > 100) {
                    this.props.setTotalUsersCount(99);
                } else {
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    onArrowClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
                if (response.data.totalCount > 100) {
                    this.props.setTotalUsersCount(99);
                } else {
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    render() {
        return (
            <UsersList
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                onPageChange={this.onPageChange}
                onArrowClick={this.onArrowClick}
                followUser={() => {
                    this.props.followUser();
                }}
                unfollowUser={() => {
                    this.props.unfollowUser();
                }}
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers(users) {
            dispatch(setUsers(users));
        },
        setTotalUsersCount(totalUsersNumber) {
            dispatch(setTotalUsersCount(totalUsersNumber));
        },
        setCurrentPage(currentPageNumber) {
            dispatch(setCurrentPage(currentPageNumber));
        },
        setIsFetching(boolean) {
            dispatch(setIsFetching(boolean));
        },
        followUser(userID) {
            dispatch(followUser(userID));
        },
        unfollowUser(userID) {
            dispatch(unfollowUser(userID));
        },
    };
};

const UsersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersListAPI);

export default UsersListContainer;
