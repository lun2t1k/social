import { NavLink } from "react-router-dom";

export default function ChatsItem(props) {
    let defaultClassName =
        "p-2 lg:pl-5 lg:pr-2 first:pt-2 last:pb-2 lg:border-b-2 last:border-b-0 flex gap-3 items-center hover:bg-slate-100 transition-all ease-in ";

    return (
        <NavLink
            to={"/messages/" + props.userID}
            className={({ isActive }) =>
                isActive
                    ? defaultClassName +
                      "bg-violet-400 text-white hover:bg-violet-400"
                    : defaultClassName
            }
        >
            <div className="min-w-[50px] max-w-[50px] overflow-hidden rounded-full bg-slate-400">
                <img
                    src={props.userAvatar}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="hidden min-w-0 flex-col lg:flex">
                <h5 className="mb-1 font-semibold">{props.userName}</h5>
                <span className="truncate text-xs">{props.lastMessage}</span>
            </div>
        </NavLink>
    );
}
