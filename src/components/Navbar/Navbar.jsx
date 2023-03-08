import NavbarLink from "./NavbarLink";
import ProfileIcon from "./icons/ProfileIcon";
import NewsIcon from "./icons/NewsIcon";
import MessagesIcon from "./icons/MessagesIcon";
import UsersIcon from "./icons/UsersIcon";
import MusicIcon from "./icons/MusicIcon";

export default function Navbar() {
    return (
        <nav className="sticky top-[76px] hidden h-fit flex-col md:flex md:min-w-[220px] md:max-w-[220px]">
            <ul className="mb-5 w-full rounded-2xl bg-white p-3">
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

            <footer className="">
                <ul className="flex flex-wrap justify-center gap-3">
                    <li>
                        <a
                            href="/"
                            className="text-[12px] text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[12px] text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            Developers
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[12px] text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            About Social
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[12px] text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            Data Protection
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[12px] text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            Help
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[12px] text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="text-[12px] text-slate-500 hover:underline hover:underline-offset-2"
                        >
                            Privicy Policy
                        </a>
                    </li>
                </ul>
            </footer>
        </nav>
    );
}
