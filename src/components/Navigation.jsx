export default function Navigation() {
    return (
        <nav className="navbar w-full md:w-1/5 md:min-w-fit h-fit bg-white rounded-3xl">
            <ul className="navbar-list min-w-[300px] p-5">
                <li className="navbar-item">
                    <a
                        href="/"
                        className="navbar-item__link hover:text-purple-accent hover:bg-slate-100"
                    >
                        Profile
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="/"
                        className="navbar-item__link hover:text-purple-accent hover:bg-slate-100"
                    >
                        Messages
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="/"
                        className="navbar-item__link hover:text-purple-accent hover:bg-slate-100"
                    >
                        News
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="/"
                        className="navbar-item__link hover:text-purple-accent hover:bg-slate-100"
                    >
                        Music
                    </a>
                </li>
                <li className="navbar-item">
                    <a
                        href="/"
                        className="navbar-item__link hover:text-purple-accent hover:bg-slate-100"
                    >
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    );
}
