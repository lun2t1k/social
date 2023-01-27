import { NavLink } from "react-router-dom";

export default function NavbarLink(props) {
    let defaultClassName =
        "block w-full p-2 rounded-lg text-2xl transition-all ease-in hover:bg-slate-100";
    let activeClassName =
        "block w-full p-2 rounded-lg text-2xl text-purple-accent transition-all ease-in hover:bg-slate-100";

    return (
        <NavLink
            to={props.url}
            className={({ isActive }) =>
                isActive ? activeClassName : defaultClassName
            }
        >
            {props.title}
        </NavLink>
    );
}
