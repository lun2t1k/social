import logo from "../Social-Logo.png";

export default function Header() {
    return (
        <header className="header mb-4">
            <div className="container-props">
                <div className="header-wrap flex justify-between items-center py-4">
                    <a href="/" className="flex items-center">
                        <img
                            src={logo}
                            width="70"
                            height="70"
                            alt="SOCIAL"
                            className="header-logo"
                        />
                        <div className="header-title text-4xl uppercase">
                            SOCIAL
                        </div>
                    </a>
                    <div className="header-buttons">
                        <button className="appearance mr-5" id="appearance">
                            Dark
                        </button>
                        <a
                            href="/"
                            className="header-buttons__login button hover:bg-purple-accent--dark"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
