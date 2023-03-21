import { NavLink } from 'react-router-dom'
import { mobileLinks } from './links'

export default function MobileNavbar() {
    let defaultClassName =
        'flex w-full flex-col items-center gap-2 p-2 text-xs dark:text-zinc-500 '

    return (
        <nav className='fixed bottom-0 z-50 w-full min-w-[320px] bg-white dark:bg-zinc-900 md:hidden'>
            <ul className='flex w-full justify-around py-1 px-3'>
                { mobileLinks.map(link => {
                    return (
                        <li key={ link.path }>
                            <NavLink
                                to={ link.path }
                                className={ ({ isActive }) =>
                                    isActive
                                        ? defaultClassName +
                                        'text-violet-400 dark:!text-zinc-100'
                                        : defaultClassName
                                }
                            >
                                { link.icon }
                                { link.title }
                            </NavLink>
                        </li>
                    )
                }) }
            </ul>
        </nav>
    )
}
