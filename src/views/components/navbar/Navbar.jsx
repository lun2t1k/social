import {NavLink} from 'react-router-dom'
import {linkStyles} from '../../../helpers/theme'
import {desktopLinks} from './links'
import Footer from '../footer/Footer'
import ThemeToggle from '../themeToggle/ThemeToggle'
import WrenchScrewdriverIcon from '../icons/WrenchScrewdriverIcon'

export default function Navbar() {
    return (
        <nav className='sticky top-[76px] hidden h-fit flex-col md:flex md:min-w-[220px] md:max-w-[220px]'>
            <ul className='mb-2 w-full rounded-2xl bg-white p-3 dark:bg-zinc-900'>
                {desktopLinks.map(link => (
                    <li key={link.title}>
                        <NavLink to={link.path} className={linkStyles.navBar}>
                            <span className='flex items-center gap-2'>
                                {link.icon}
                                {link.title}
                            </span>
                            {link.development && <WrenchScrewdriverIcon />}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <ThemeToggle />

            <Footer />
        </nav>
    )
}
