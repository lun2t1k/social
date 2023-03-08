import MobileNavbarLink from "./MobileNavbarLink";
import NewsIcon from "./icons/NewsIcon";
import MessagesIcon from "./icons/MessagesIcon";
import UsersIcon from "./icons/UsersIcon";
import MusicIcon from "./icons/MusicIcon";

export default function MobileNavbar(props) {
    return (
        <nav className="fixed bottom-0 w-full bg-white md:hidden z-50">
            <ul className="w-full px-0 pt-1 pb-7 flex justify-around">
                <li>
                    <MobileNavbarLink icon={<NewsIcon />} title="News" url="/" />
                </li>
                <li>
                    <MobileNavbarLink
                        icon={<MessagesIcon />}
                        title="Messages"
                        url="/messages"
                    />
                </li>
                <li>
                    <MobileNavbarLink
                        icon={<UsersIcon />}
                        title="Users"
                        url="/users"
                    />
                </li>
                <li>
                    <MobileNavbarLink
                        icon={<MusicIcon />}
                        title="Music"
                        url="/music"
                    />
                </li>
            </ul>
        </nav>
    );
}