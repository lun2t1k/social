import { lazy } from 'react'
import { withSuspense } from '../hoc/withSuspense'
import Hub from '../views/pages/hub/Hub'

const Profile = withSuspense(lazy(() => import('../views/pages/profile/Profile')))
const News = withSuspense(lazy(() => import('../views/pages/news/News')))
const Messages = withSuspense(lazy(() => import('../views/pages/messages/Messages')))
const Friends = withSuspense(lazy(() => import('../views/pages/friends/Friends')))
const Music = withSuspense(lazy(() => import('../views/pages/music/Music')))

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
        path: '/messages/:userID?',
        component: <Messages />
    },
    {
        path: '/friends',
        component: <Friends />
    },
    {
        path: '/music',
        component: <Music />
    },
    {
        path: '/hub',
        component: <Hub />
    }
]

export default routes
