import Notifications from "./Notifications"
import UserDefaultAvatar from "../UserDefaultAvatar"
import MobileMenu from "./MobileMenu"
import { NavLink } from "react-router-dom"

export default function UserActions() {
    return (
        <div className="flex items-center">
            <Notifications />
            <MobileMenu />
            <NavLink to={ "/profile" }>
                <UserDefaultAvatar />
            </NavLink>
        </div>
    )
}
