import { NavLink } from 'react-router-dom'
import links from './links'

export default function Footer() {
    return (
        <footer>
            <ul className='flex flex-wrap justify-center gap-3'>
                { links.map(link => {
                    return (
                        <li key={ link.path }>
                            <NavLink
                                to={ link.path }
                                className='text-xs text-zinc-500 hover:underline hover:underline-offset-2'
                            >
                                { link.title }
                            </NavLink>
                        </li>
                    )
                }) }
            </ul>
        </footer>
    )
}
