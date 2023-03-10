import NavbarLink from "./NavbarLink"
import ProfileIcon from "./icons/ProfileIcon"
import NewsIcon from "./icons/NewsIcon"
import MessagesIcon from "./icons/MessagesIcon"
import FriendsIcon from "./icons/FriendsIcon"
import MusicIcon from "./icons/MusicIcon"
import Footer from '../footer/Footer'

export default function Navbar() {
    return (
        <nav className="sticky top-[76px] hidden h-fit flex-col md:flex md:min-w-[220px] md:max-w-[220px]">
            <ul className="mb-5 w-full rounded-2xl bg-white dark:bg-zinc-900 p-3">
                <li>
                    <NavbarLink
                        icon={ <ProfileIcon /> }
                        title="My Profile"
                        url="/profile"
                    />
                </li>
                <li>
                    <NavbarLink icon={ <NewsIcon /> } title="News" url="/news" />
                </li>
                <li>
                    <NavbarLink
                        icon={ <MessagesIcon /> }
                        title="Messages"
                        url="/messages"
                    />
                </li>
                <li>
                    <NavbarLink
                        icon={ <FriendsIcon /> }
                        title="Friends"
                        url="/friends"
                    />
                </li>
                <li>
                    <NavbarLink
                        icon={ <MusicIcon /> }
                        title="Music"
                        url="/music"
                    />
                </li>
            </ul>

            <Footer />
        </nav>
    )
}
