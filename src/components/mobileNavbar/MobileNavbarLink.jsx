import { NavLink } from "react-router-dom";

export default function NavbarLink(props) {
    return (
        <NavLink
            to={props.url}
            className="flex w-full flex-col items-center gap-2 p-2 text-xs"
        >
            {props.icon}
            {props.title}
        </NavLink>
    );
}
