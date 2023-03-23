import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { linkStyles, errorStyles } from '../../../helpers/theme'
import { hubLinks } from '../../components/navbar/links'
import { footerLinks } from '../../components/footer/links'
import UserAvatar from '../../components/UserAvatar'
import ThemeToggle from '../../components/themeToggle/ThemeToggle'
import HubLink from './HubLink'

const Hub = () => {
    useEffect(() => {
        document.title = 'Hub'
    }, [])

    return (
        <div className='w-full overflow-hidden rounded-2xl'>
            <div className='flex flex-col items-center p-5'>
                <UserAvatar img='' size='3lg' extraClasses='mb-3' />
                <h3 className='text-2xl mb-4 capitalize'>User Name</h3>
                <ThemeToggle />
                <ul className='w-full flex flex-col gap-3'>
                    { hubLinks.map(link => <HubLink key={ link.path } link={ link } />) }
                    { footerLinks.map(link => <HubLink key={ link.path } link={ link } />) }
                    <li>
                        <NavLink
                            to='/logout'
                            className={ linkStyles.hub + errorStyles.color }
                        >
                            Log out
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Hub
