import { NavLink } from "react-router-dom";
import Logo from '../Logo';
import UserActions from "./UserActions";

export default function Header(props) {
    return (
        <header className="fixed top-0 z-50 w-full bg-white dark:bg-zinc-900">
            <div className="container-props">
                <div className="flex items-center justify-between py-2">
                    <NavLink to="/" className="flex items-center">
                        <Logo width="40" height="40" />
                    </NavLink>

                    <UserActions />
                </div>
            </div>
        </header>
    );
};
