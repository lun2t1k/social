import NavbarLink from "./NavbarLink";

export default function Navbar() {
    return (
        <nav className="w-full md:w-1/5 md:min-w-fit h-fit bg-white rounded-3xl sticky top-[118px]">
            <ul className="min-w-[300px] p-5">
                <li>
                    <NavbarLink title="My Profile" url="/profile" />
                </li>
                <li>
                    <NavbarLink title="News" url="/" />
                </li>
                <li>
                    <NavbarLink title="Messages" url="/messages" />
                </li>
                <li>
                    <NavbarLink title="Music" url="/music" />
                </li>
                <li>
                    <NavbarLink title="Settings" url="/settings" />
                </li>
            </ul>
        </nav>
    );
}
