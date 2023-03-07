import NavbarLink from "./NavbarLink";
import ProfileIcon from "./icons/ProfileIcon";
import NewsIcon from "./icons/NewsIcon";
import MessagesIcon from "./icons/MessagesIcon";
import UsersIcon from "./icons/UsersIcon";
import MusicIcon from "./icons/MusicIcon";

export default function Navbar() {
    return (
        <nav className="sticky hidden md:flex top-[76px] h-fit w-full rounded-2xl bg-white md:w-1/5">
            <ul className="w-full p-3">
                <li>
                    <NavbarLink
                        icon={<ProfileIcon />}
                        title="My Profile"
                        url="/profile"
                    />
                </li>
                <li>
                    <NavbarLink icon={<NewsIcon />} title="News" url="/" />
                </li>
                <li>
                    <NavbarLink
                        icon={<MessagesIcon />}
                        title="Messages"
                        url="/messages"
                    />
                </li>
                <li>
                    <NavbarLink
                        icon={<UsersIcon />}
                        title="Users"
                        url="/users"
                    />
                </li>
                <li>
                    <NavbarLink
                        icon={<MusicIcon />}
                        title="Music"
                        url="/music"
                    />
                </li>
            </ul>
        </nav>
    );
}
