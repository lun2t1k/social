import { connect } from "react-redux";
import {
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    followUser,
    unfollowUser,
} from "../../redux/usersPageReducer";
import UsersList from "./UsersList";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
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
        followUser() {
            dispatch(followUser());
        },
        unfollowUser() {
            dispatch(unfollowUser());
        },
    };
};

const UsersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersList);

export default UsersListContainer;
