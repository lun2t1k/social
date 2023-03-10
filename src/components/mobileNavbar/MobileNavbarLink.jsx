import { NavLink } from "react-router-dom"

export default function NavbarLink(props) {
    let defaultClassName =
        "flex w-full flex-col items-center gap-2 p-2 text-xs dark:text-zinc-500 "
    return (
        <NavLink
            to={ props.url }
            className={ ({ isActive }) =>
                isActive
                    ? defaultClassName + "text-violet-400 dark:!text-zinc-100"
                    : defaultClassName
            }
        >
            { props.icon }
            { props.title }
        </NavLink>
    )
}
