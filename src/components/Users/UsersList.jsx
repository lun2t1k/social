import React from "react";
import axios from "axios";
import defaultUserAvatar from "./../../assets/img/default-user-avatar.png";

class UsersList extends React.Component {
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
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                if (response.data.totalCount > 100) {
                    this.props.setTotalUsersCount(99);
                } else {
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            });
    };
    onArrowClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                if (response.data.totalCount > 100) {
                    this.props.setTotalUsersCount(99);
                } else {
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            });
    };
    render() {
        let pagesAmount = Math.ceil(
            this.props.totalCount / this.props.pageSize
        );
        let pages = [];

        for (let i = 1; i <= pagesAmount; i++) {
            pages.push(i);
        }

        return (
            <>
                <ul>
                    {this.props.users.map((user) => {
                        return (
                            <li
                                key={user.id}
                                id={user.id}
                                className="flex items-center justify-between border-b-2 last:border-b-0 py-5 last:pb-0"
                            >
                                <div className="flex items-center">
                                    <div className="w-[70px] h-[70px] rounded-full overflow-hidden mr-3">
                                        <img
                                            src={
                                                user.photos.small
                                                    ? user.photos.small
                                                    : defaultUserAvatar
                                            }
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="font-bold mb-1">
                                            {user.name}
                                        </h5>
                                    </div>
                                </div>
                                <button
                                    onClick={
                                        user.followed
                                            ? this.props.unfollowUser(user.id)
                                            : this.props.followUser(user.id)
                                    }
                                    className="p-2 bg-purple-accent rounded-xl text-white"
                                >
                                    {user.followed ? "Unfollow" : "Follow"}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <ol className="flex justify-end gap-2 mt-10">
                    <li
                        id="prevPage"
                        onClick={() => {
                            if (this.props.currentPage === 1) {
                                return;
                            } else {
                                this.onArrowClick(this.props.currentPage - 1);
                            }
                        }}
                        className={
                            this.props.currentPage === 1
                                ? "w-[40px] h-[40px] flex items-center justify-center text-center p-2 border-2 rounded-xl cursor-not-allowed transition-all ease delay-100 bg-gray-200 opacity-50"
                                : "w-[40px] h-[40px] flex items-center justify-center text-center p-2 border-2 rounded-xl cursor-pointer transition-all ease delay-100 hover:bg-gray-200"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </li>
                    {pages.map((page) => {
                        return (
                            <li
                                key={page}
                                onClick={() => {
                                    this.onPageChange(page);
                                }}
                                className={
                                    this.props.currentPage === page
                                        ? "w-[40px] h-[40px] flex items-center justify-center text-center p-2 border-2 rounded-xl cursor-pointer transition-all ease delay-100 bg-purple-accent border-purple-accent text-white"
                                        : "w-[40px] h-[40px] flex items-center justify-center text-center p-2 border-2 rounded-xl cursor-pointer transition-all ease delay-100 hover:bg-gray-200"
                                }
                            >
                                {page}
                            </li>
                        );
                    })}
                    <li
                        id="nextPage"
                        onClick={() => {
                            if (this.props.currentPage === pagesAmount) {
                                return;
                            } else {
                                this.onArrowClick(this.props.currentPage + 1);
                            }
                        }}
                        className={
                            this.props.currentPage === pagesAmount
                                ? "w-[40px] h-[40px] flex items-center justify-center text-center p-2 border-2 rounded-xl cursor-not-allowed transition-all ease delay-100 bg-gray-200 opacity-50"
                                : "w-[40px] h-[40px] flex items-center justify-center text-center p-2 border-2 rounded-xl cursor-pointer transition-all ease delay-100 hover:bg-gray-200"
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </li>
                </ol>
            </>
        );
    }
}

export default UsersList;
