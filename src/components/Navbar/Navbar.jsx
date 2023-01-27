import NavbarLink from "./NavbarLink";

export default function Navbar() {
    return (
        <nav className="navbar w-full md:w-1/5 md:min-w-fit h-fit bg-white rounded-3xl sticky top-[118px]">
            <ul className="navbar-list min-w-[300px] p-5">
                <li className="navbar-item">
                    <NavbarLink linkTitle="My Profile" linkURL="#" />
                </li>
                <li className="navbar-item">
                    <NavbarLink linkTitle="News" linkURL="#" />
                </li>
                <li className="navbar-item">
                    <NavbarLink linkTitle="Messages" linkURL="#" />
                </li>
                <li className="navbar-item">
                    <NavbarLink linkTitle="Music" linkURL="#" />
                </li>
                <li className="navbar-item">
                    <NavbarLink linkTitle="Settings" linkURL="#" />
                </li>
            </ul>
        </nav>
    );
}
