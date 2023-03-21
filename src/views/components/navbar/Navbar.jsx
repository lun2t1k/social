import { NavLink } from 'react-router-dom'
import { desktopLinks } from './links'
import Footer from '../footer/Footer'
import ThemeToggle from '../themeToggle/ThemeToggle'

export default function Navbar() {
    return (
        <nav className='sticky top-[76px] hidden h-fit flex-col md:flex md:min-w-[220px] md:max-w-[220px]'>
            <ul className='mb-2 w-full rounded-2xl bg-white p-3 dark:bg-zinc-900'>
                { desktopLinks.map(link => {
                    return (
                        <li key={ link.path }>
                            <NavLink
                                to={ link.path }
                                className='flex w-full items-center gap-2 rounded-lg p-2 transition-all ease-in hover:bg-slate-100 dark:hover:bg-zinc-800'
                            >
                                { link.icon }
                                { link.title }
                            </NavLink>
                        </li>
                    )
                }) }
            </ul>

            <ThemeToggle />

            <Footer />
        </nav>
    )
}
