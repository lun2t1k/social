import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "./../../assets/img/Social-Logo.png";
import UserDefaultPhoto from "./UserDefaultPhoto";

const HeaderContainer = (props) => {
    return (
        <header className="fixed top-0 z-50 w-full bg-white">
            <div className="container-props">
                <div className="flex items-center justify-between py-4">
                    <NavLink to="/" className="flex items-center">
                        <div className="h-[70px] w-[70px]">
                            <img
                                src={logo}
                                alt=""
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="text-4xl uppercase">SOCIAL</div>
                    </NavLink>

                    {props.isAuth ? (
                        <UserDefaultPhoto />
                    ) : (
                        <NavLink
                            to="/login"
                            className="rounded-xl bg-violet-500 px-6 py-3 text-xl font-bold text-white transition-all ease-in hover:bg-violet-600"
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

const Header = connect(mapStateToProps)(HeaderContainer);

export default Header;
