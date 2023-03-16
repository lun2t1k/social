import ProfileIcon from './icons/ProfileIcon'
import NewsIcon from './icons/NewsIcon'
import MessagesIcon from './icons/MessagesIcon'
import FriendsIcon from './icons/FriendsIcon'
import MusicIcon from './icons/MusicIcon'

const links = [
    {
        path: '/profile',
        title: 'My Profile',
        icon: <ProfileIcon />
    },
    {
        path: '/news',
        title: 'News',
        icon: <NewsIcon />
    },
    {
        path: '/messages',
        title: 'Messages',
        icon: <MessagesIcon />
    },
    {
        path: '/friends',
        title: 'Friends',
        icon: <FriendsIcon />
    },
    {
        path: '/music',
        title: 'Music',
        icon: <MusicIcon />
    }
]

export default links
