import { NavLink } from "react-router-dom";
import UserDefaultPhoto from './UserDefaultPhoto';
import UsersLoader from "./UsersLoader";
import UsersNavigation from './UsersNavigation';

export default function UsersList(props) {
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
                                    className="flex items-center justify-between border-b-2 py-5 last:border-b-0 last:pb-0"
                                >
                                    <div className="flex items-center">
                                        <NavLink
                                            to={`/profile/${user.id}`}
                                            className="mr-3 flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-slate-400"
                                        >
                                            {user.photos.small ? (
                                                <img
                                                    src={user.photos.small}
                                                    alt=""
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <UserDefaultPhoto />
                                            )}
                                        </NavLink>
                                        <NavLink to={`/profile/${user.id}`}>
                                            <h5 className="mb-1 font-bold">
                                                {user.name}
                                            </h5>
                                        </NavLink>
                                    </div>
                                    <button
                                        onClick={() =>
                                            user.followed
                                                ? props.unfollow(user.id)
                                                : props.follow(user.id)
                                        }
                                        disabled={props.followingQueue.some(
                                            (userID) => userID === user.id
                                        )}
                                        className="rounded-xl bg-violet-500 p-2 text-white transition-all ease-in hover:bg-violet-600"
                                    >
                                        {props.followingQueue.some(
                                            (userID) => userID === user.id
                                        ) ? (
                                            <span className="block h-6 w-6 animate-spin rounded-full border-2 border-transparent border-t-white" />
                                        ) : user.followed ? (
                                            "Unfollow"
                                        ) : (
                                            "Follow"
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <UsersNavigation totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange} />
                </>
            )}
        </>
    );
}
