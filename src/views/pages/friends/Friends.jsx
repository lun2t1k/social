import { useEffect } from 'react'
import { componentWrapper } from '../../../helpers/theme'
import FriendsSearch from './FriendsSearch'
import FriendsList from './FriendsList'
import UsersList from './suggestions/UsersList'

export default function Friends() {
    useEffect(() => {
        document.title = 'Friends'
    }, [])

    return (
        <>
            <div className='relative flex w-full flex-col gap-5 lg:flex-row'>
                <div className={ componentWrapper.default + 'lg:w-2/3' }>
                    <div className='p-5'>
                        <FriendsSearch />
                        <FriendsList />
                    </div>
                </div>
                <div
                    className={
                        componentWrapper.default +
                        'sticky top-[76px] h-fit lg:w-1/3'
                    }
                >
                    <div className='p-5'>
                        <UsersList />
                    </div>
                </div>
            </div>
        </>
    )
}
