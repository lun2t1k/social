import { NavLink } from "react-router-dom";
import UserDefaultPhoto from './UserDefaultPhoto';
import UsersLoader from "./UsersLoader";
import Navigation from '../navigation/Navigation';

export default function UsersList(props) {
    return (
        <>
            <h3 className="font-semibold mb-3">People you may know</h3>

            {props.isFetching ? (
                <UsersLoader />
            ) : (
                <>
                    <ul className="w-full">
                        {props.users.map((user) => {
                            return (
                                <li
                                    key={user.id}
                                    id={user.id}
                                    className="flex items-center justify-between border-b-2 py-2 last:border-b-0 last:pb-0"
                                >
                                    <div className="flex items-center min-w-0">
                                        <NavLink
                                            to={`/profile/${user.id}`}
                                            className="mr-2 flex h-[40px] min-w-[40px] max-w-[40px] items-center justify-center overflow-hidden rounded-full bg-slate-400"
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
                                        <NavLink to={`/profile/${user.id}`} className="truncate">
                                            {user.name}
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
                                        className="ml-3 rounded-xl bg-violet-400 px-2 py-1 text-white text-xs font-semibold transition-all ease-in hover:bg-violet-500"
                                    >
                                        {props.followingQueue.some(
                                            (userID) => userID === user.id
                                        ) ? (
                                            <span className="block h-5 w-5 animate-spin rounded-full border-2 border-transparent border-t-white" />
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
                    <Navigation totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange} />
                </>
            )}
        </>
    );
}
