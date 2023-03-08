import { NavLink } from "react-router-dom";

export default function NavbarLink(props) {
    return (
        <NavLink
            to={props.url}
            className="flex flex-col w-full items-center gap-2 p-2"
        >
            {props.icon}
            {props.title}
        </NavLink>
    );
}
