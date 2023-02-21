import { NavLink } from 'react-router-dom';
import usersAPI from '../../api/usersAPI';
import UsersLoader from './UsersLoader';

export default function UsersList(props) {
    let pagesAmount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }

    return (
        <>
            {props.isFetching 
                ? (<UsersLoader />) 
                : (
                    <>
                        <ul>
                            {props.users.map((user) => {
                                return (
                                    <li
                                        key={user.id}
                                        id={user.id}
                                        className="flex items-center justify-between border-b-2 last:border-b-0 py-5 last:pb-0"
                                    >
                                        <div className="flex items-center">
                                            <NavLink
                                                to={`/profile/${user.id}`}
                                                className="flex items-center justify-center w-[70px] h-[70px] bg-slate-400 rounded-full overflow-hidden mr-3"
                                            >
                                                {user.photos.small ? (
                                                    <img
                                                        src={user.photos.small}
                                                        alt=""
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1}
                                                        stroke="white"
                                                        className="w-[50px] h-[50px]"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                        />
                                                    </svg>
                                                )}
                                            </NavLink>
                                            <NavLink to={`/profile/${user.id}`}>
                                                <h5 className="font-bold mb-1">
                                                    {user.name}
                                                </h5>
                                            </NavLink>
                                        </div>
                                        <button
                                            onClick={() => {
                                                user.followed 
                                                    ? usersAPI.unfollowUserRequest(user.id).then((data) => {
                                                        if (data.resultCode === 0) {
                                                            props.unfollowUser(user.id);
                                                        }
                                                    }).catch((error) => {
                                                        alert(error);
                                                    })
                                                    : usersAPI.followUserRequest(user.id).then((data) => {
                                                        if (data.resultCode === 0) {
                                                            props.followUser(user.id);
                                                        }
                                                    }).catch((error) => {
                                                        alert(error);
                                                    })
                                            }}
                                            className="p-2 bg-purple-accent rounded-xl text-white"
                                        >
                                            {user.followed ? 'Unfollow' : 'Follow'}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        {props.totalCount <= props.pageSize ? null : (
                            <ol className="flex justify-end gap-2 mt-10 select-none">
                                <li
                                    id="prevPage"
                                    onClick={() => {
                                        if (props.currentPage === 1) {
                                            return;
                                        } else {
                                            props.onPageChange(
                                                props.currentPage - 1
                                            );
                                        }
                                    }}
                                    className={
                                        props.currentPage === 1
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
                                            onClick={() => {props.onPageChange(page)}}
                                            className={
                                                props.currentPage === page
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
                                        if (props.currentPage === pagesAmount) {
                                            return;
                                        } else {
                                            props.onPageChange(
                                                props.currentPage + 1
                                            );
                                        }
                                    }}
                                    className={
                                        props.currentPage === pagesAmount
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
                        )}
                    </>
                )
            }
        </>
    );
}
