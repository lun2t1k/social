import ProfileIcon from '../icons/ProfileIcon'
import NewsIcon from '../icons/NewsIcon'
import MessagesIcon from '../icons/MessagesIcon'
import FriendsIcon from '../icons/FriendsIcon'
import GroupIcon from '../icons/GroupIcon'
import PhotoIcon from '../icons/PhotoIcon'
import MusicIcon from '../icons/MusicIcon'
import FilmIcon from '../icons/FilmIcon'
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
        path: '/',
        title: 'Communities',
        icon: <GroupIcon />,
        desktop: true,
        mobile: false,
        hub: true,
        development: true
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
        path: '/',
        title: 'Photos',
        icon: <PhotoIcon />,
        desktop: true,
        mobile: false,
        hub: true,
        development: true
    },
    {
        path: '/',
        title: 'Videos',
        icon: <FilmIcon />,
        desktop: true,
        mobile: false,
        hub: true,
        development: true
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
