import { NavLink } from 'react-router-dom'
import { container } from '../../../helpers/theme'
import Logo from '../Logo'
import Notifications from './Notifications'
import UserAvatar from '../UserAvatar'
import MobileMenu from './MobileMenu'

export default function Header() {
    return (
        <header className='fixed top-0 z-50 w-full bg-white dark:bg-zinc-900'>
            <div className={ container.size.default }>
                <div className='flex items-center justify-between py-2'>
                    <NavLink to='/' className='flex items-center'>
                        <Logo width='40' height='40' />
                    </NavLink>

                    <div className='flex items-center'>
                        <Notifications />
                        <MobileMenu />
                        <NavLink to={ '/profile' }>
                            <UserAvatar img={ '' } size='md' />
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}
