import MobileNavbarLink from "./MobileNavbarLink"
import NewsIcon from "./icons/NewsIcon"
import MessagesIcon from "./icons/MessagesIcon"
import FriendsIcon from "./icons/FriendsIcon"
import MusicIcon from "./icons/MusicIcon"

export default function MobileNavbar() {
    return (
        <nav className="fixed bottom-0 w-full min-w-[320px] bg-white md:hidden z-50 dark:bg-zinc-900">
            <ul className="w-full py-1 px-3 flex justify-around">
                <li>
                    <MobileNavbarLink icon={ <NewsIcon /> } title="News" url="/news" />
                </li>
                <li>
                    <MobileNavbarLink
                        icon={ <MessagesIcon /> }
                        title="Messages"
                        url="/messages"
                    />
                </li>
                <li>
                    <MobileNavbarLink
                        icon={ <FriendsIcon /> }
                        title="Friends"
                        url="/Friends"
                    />
                </li>
                <li>
                    <MobileNavbarLink
                        icon={ <MusicIcon /> }
                        title="Music"
                        url="/music"
                    />
                </li>
            </ul>
        </nav>
    )
}