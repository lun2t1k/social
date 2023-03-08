import { NavLink } from "react-router-dom";

export default function NavbarLink(props) {
    return (
        <NavLink
            to={props.url}
            className="flex flex-col w-full items-center gap-2 rounded-lg p-2 transition-all ease-in hover:bg-slate-100"
        >
            {props.icon}
            {props.title}
        </NavLink>
    );
}
