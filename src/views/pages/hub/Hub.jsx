import {useEffect} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {getAuthorizedUserProfile} from '../../../redux/ducks/login'
import {linkStyles, errorStyles} from '../../../helpers/theme'
import {hubLinks} from '../../components/navbar/links'
import {footerLinks} from '../../components/footer/links'
import UserAvatar from '../../components/UserAvatar'
import ThemeToggle from '../../components/themeToggle/ThemeToggle'
import HubLink from './HubLink'

const Hub = ({authorizedUserProfile}) => {
    useEffect(() => {
        document.title = 'Hub'
    }, [])

    return (
        <div className='w-full overflow-hidden rounded-2xl'>
            <div className='flex flex-col items-center p-5'>
                <UserAvatar
                    img={authorizedUserProfile.photos.large}
                    size='3lg'
                    extraClasses='mb-3'
                />
                <h3 className='mb-4 text-2xl capitalize'>
                    {authorizedUserProfile.fullName}
                </h3>
                <ThemeToggle />
                <ul className='flex w-full flex-col gap-3'>
                    {hubLinks.map(link => (
                        <HubLink key={link.title} link={link} />
                    ))}
                    {footerLinks.map(link => (
                        <HubLink key={link.title} link={link} />
                    ))}
                    <li>
                        <NavLink
                            to='/logout'
                            className={linkStyles.hub + errorStyles.color}
                        >
                            Log out
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authorizedUserProfile: getAuthorizedUserProfile(state)
    }
}

export default connect(mapStateToProps, null)(Hub)
