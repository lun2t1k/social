import { NavLink } from "react-router-dom";
import logo from "./../../assets/img/Social-Logo.png";
import UserActions from "./UserActions";

export default function Header(props) {
    return (
        <header className="fixed top-0 z-50 w-full bg-white">
            <div className="container-props">
                <div className="flex items-center justify-between py-2">
                    <NavLink to="/" className="flex items-center">
                        <div className="h-[40px] w-[40px]">
                            <img
                                src={logo}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        {/* <div className="text-xl uppercase">SOCIAL</div> */}
                    </NavLink>
                    <UserActions />
                </div>
            </div>
        </header>
    );
};
