import {NavLink} from 'react-router-dom'
import {linkStyles} from '../../../helpers/theme'
import {footerLinks} from './links'

export default function Footer() {
    return (
        <footer>
            <ul className='flex flex-wrap justify-center gap-3'>
                {footerLinks.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path} className={linkStyles.footer}>
                            {link.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </footer>
    )
}
