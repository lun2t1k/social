import ProfileIcon from '../icons/ProfileIcon'
import NewsIcon from '../icons/NewsIcon'
import MessagesIcon from '../icons/MessagesIcon'
import FriendsIcon from '../icons/FriendsIcon'
import MusicIcon from '../icons/MusicIcon'

export const desktopLinks = [
    {
        path: '/profile',
        title: 'My Profile',
        icon: <ProfileIcon />
    },
    {
        path: '/news',
        title: 'News',
        icon: <NewsIcon />,
        mobile: true
    },
    {
        path: '/messages',
        title: 'Messages',
        icon: <MessagesIcon />,
        mobile: true
    },
    {
        path: '/friends',
        title: 'Friends',
        icon: <FriendsIcon />,
        mobile: true
    },
    {
        path: '/music',
        title: 'Music',
        icon: <MusicIcon />,
        mobile: true
    }
]

export const mobileLinks = desktopLinks.filter(link => link.mobile == true)
