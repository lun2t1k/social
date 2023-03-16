import Profile from '../views/pages/profile/Profile'
import News from '../views/pages/news/News'
import Messages from '../views/pages/messages/Messages'
import Friends from '../views/pages/friends/Friends'
import Music from '../views/pages/music/Music'

const routes = [
    {
        path: '/profile/:userID?',
        component: <Profile />
    },
    {
        path: '/news',
        component: <News />
    },
    {
        path: '/messages/*',
        component: <Messages />
    },
    {
        path: '/friends',
        component: <Friends />
    },
    {
        path: '/music',
        component: <Music />
    }
]

export default routes
