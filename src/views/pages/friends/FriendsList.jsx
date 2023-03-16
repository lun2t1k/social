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
                                className="relative flex items-center justify-between border-b py-5 last:border-b-0 last:pb-0 dark:border-zinc-800"
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

                                <button className='absolute top-[2px] -right-[12px] p-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 } stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </button>
                            </li>
                        )
                    }) }
                </ul>
            ) }
        </>
    )
}
