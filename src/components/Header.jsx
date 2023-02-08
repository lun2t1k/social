import logo from "../assets/img/Social-Logo.png";

export default function Header(props) {
    return (
        <header className="w-full bg-white fixed top-0 z-50">
            <div className="container-props">
                <div className="flex justify-between items-center py-4">
                    <a href="/" className="flex items-center">
                        <div className="w-[70px] h-[70px]">
                            <img
                                src={logo}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-4xl uppercase">SOCIAL</div>
                    </a>
                    <div className="buttons">
                        <button className="mr-5" id="appearance">
                            <span className="appearance-title">Dark</span>
                        </button>
                        <a
                            href="/"
                            className="px-6 py-3 rounded-lg text-xl text-white bg-purple-accent transition-all ease-in hover:bg-purple-accent--dark"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
