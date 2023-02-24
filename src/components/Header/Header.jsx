import logo from "./../../assets/img/Social-Logo.png";

export default function Header(props) {
    return (
        <header className="w-full bg-white fixed top-0 z-50">
            <div className="container-props">
                <div className="flex justify-between items-center py-4">
                    <a href="/" className="flex items-center">
                        <div className="w-[70px] h-[70px]">
                            <img src={logo}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-4xl uppercase">SOCIAL</div>
                    </a>

                    {props.isAuth ? (
                        <div className="flex items-center justify-center w-[70px] h-[70px] bg-slate-400 rounded-full overflow-hidden mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="white"
                                className="w-[50px] h-[50px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        </div>
                    ) : (
                        <a href="/"
                            className="px-6 py-3 rounded-lg text-xl text-white bg-purple-accent transition-all ease-in hover:bg-purple-accent--dark"
                        >
                            Login
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}
