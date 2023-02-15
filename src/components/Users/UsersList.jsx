import defaultUserAvatar from "./../../assets/img/default-user-avatar.png";
import UsersLoader from "./UsersLoader";

export default function UsersList(props) {
    let pagesAmount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }

    return (
        <>
            {props.isFetching ? (
                <UsersLoader />
            ) : (
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
                                                ? props.unfollowUser(user.id)
                                                : props.followUser(user.id)
                                        }
                                        className="p-2 bg-purple-accent rounded-xl text-white"
                                    >
                                        {user.followed ? "Unfollow" : "Follow"}
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
                                        onClick={() => {
                                            props.onPageChange(page);
                                        }}
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
            )}
        </>
    );
}
