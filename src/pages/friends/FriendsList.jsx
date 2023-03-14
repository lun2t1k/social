import { NavLink } from "react-router-dom"
import FriendsLoader from "./FriendsLoader"
import FriendDefaultPhoto from "./FriendDefaultPhoto"

export default function FriendsList(props) {
    return (
        <>
            { props.isFetchingFriends ? (
                <FriendsLoader />
            ) : (
                <ul className="w-full">
                    { props.friends.map(friend => {
                        return (
                            <li
                                key={ friend.id }
                                id={ friend.id }
                                className="flex items-center justify-between border-b py-5 last:border-b-0 last:pb-0 dark:border-zinc-800"
                            >
                                <div className="flex">
                                    <NavLink
                                        to={ `/profile/${friend.id}` }
                                        className="mr-3 flex h-[70px] w-[70px] flex-[1_0_auto] items-center justify-center overflow-hidden rounded-full bg-slate-400"
                                    >
                                        { friend.avatar ? (
                                            <img
                                                src={ friend.avatar }
                                                alt=""
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <FriendDefaultPhoto />
                                        ) }
                                    </NavLink>
                                    <div>
                                        <NavLink
                                            to={ `/profile/${friend.id}` }
                                            className="mb-1 font-semibold"
                                        >
                                            { friend.name }
                                        </NavLink>
                                        <p className="mb-1 text-xs">
                                            { friend.email }
                                        </p>
                                        <NavLink
                                            to={ "/" }
                                            className="text-xs text-violet-400 transition-all ease-in hover:text-violet-500"
                                        >
                                            Write a message
                                        </NavLink>
                                    </div>
                                </div>
                            </li>
                        )
                    }) }
                </ul>
            ) }
        </>
    )
}
