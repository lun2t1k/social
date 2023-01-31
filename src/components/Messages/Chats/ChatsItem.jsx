import { NavLink } from "react-router-dom";

export default function ChatsItem(props) {
    let defaultClassName =
        "px-5 py-5 border-b-2 last:border-b-0 flex items-center hover:bg-gray-200 transition-all duration-300 ease-in";
    let activeClassName =
        "px-5 py-5 border-b-2 last:border-b-0 flex items-center bg-purple-accent text-white hover:bg-purple-accent transition-all duration-300 ease-in";

    return (
        <NavLink
            to={"/messages/" + props.userID}
            className={({ isActive }) =>
                isActive ? activeClassName : defaultClassName
            }
        >
            <div className="min-w-[70px] min-h-[70px] max-w-[70px] max-h-[70px] rounded-full overflow-hidden bg-slate-400 mr-3">
                <img
                    src={props.userAvatar}
                    alt={props.userName}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col min-w-0">
                <h5 className="font-bold mb-1">{props.userName}</h5>
                <span className="truncate">{props.lastMessage}</span>
            </div>
        </NavLink>
    );
}
