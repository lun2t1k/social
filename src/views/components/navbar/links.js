import ProfileIcon from '../icons/ProfileIcon'
import NewsIcon from '../icons/NewsIcon'
import MessagesIcon from '../icons/MessagesIcon'
import FriendsIcon from '../icons/FriendsIcon'
import MusicIcon from '../icons/MusicIcon'
import HubIcon from '../icons/HubIcon'

export const links = [
    {
        path: '/profile',
        title: 'Profile',
        icon: <ProfileIcon />,
        desktop: true,
        mobile: false,
        hub: true
    },
    {
        path: '/news',
        title: 'News',
        icon: <NewsIcon />,
        desktop: true,
        mobile: true,
        hub: true
    },
    {
        path: '/messages',
        title: 'Messages',
        icon: <MessagesIcon />,
        desktop: true,
        mobile: true,
        hub: true
    },
    {
        path: '/friends',
        title: 'Friends',
        icon: <FriendsIcon />,
        desktop: true,
        mobile: false,
        hub: true
    },
    {
        path: '/music',
        title: 'Music',
        icon: <MusicIcon />,
        desktop: true,
        mobile: true,
        hub: true
    },
    {
        path: '/hub',
        title: 'Hub',
        icon: <HubIcon />,
        desktop: false,
        mobile: true,
        hub: false
    }
]

export const mobileLinks = links.filter(link => link.mobile == true)
export const desktopLinks = links.filter(link => link.desktop == true)
export const hubLinks = links.filter(link => link.hub == true)
