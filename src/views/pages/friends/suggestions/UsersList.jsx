import { useEffect } from 'react'
import { connect } from 'react-redux'
import {
    getUsers,
    getFriendsSuggestions,
    follow,
    unfollow,
    requestUsers
} from '../../../../redux/ducks/friends'
import UsersSkeleton from './UsersSkeleton'
import Navigation from '../navigation/Navigation'
import User from './User'

const UsersList = ({ users, friendsSuggestions, requestUsers, ...props }) => {
    const onPageChange = pageNumber => {
        requestUsers(pageNumber)
    }

    useEffect(() => {
        requestUsers(0)
    }, [requestUsers])

    return (
        <>
            <h3 className='mb-3 font-semibold'>People you may know</h3>

            { friendsSuggestions.isFetchingUsers ? (
                <UsersSkeleton />
            ) : (
                <ul className='w-full'>
                    { users.map(user => {
                        return (
                            <User
                                key={ user.id }
                                user={ user }
                                follow={ props.follow }
                                unfollow={ props.unfollow }
                                followingQueue={
                                    friendsSuggestions.followingQueue
                                }
                            />
                        )
                    }) }
                </ul>
            ) }

            <Navigation
                totalCount={ friendsSuggestions.totalCount }
                pageSize={ friendsSuggestions.pageSize }
                onPageChange={ onPageChange }
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        friendsSuggestions: getFriendsSuggestions(state)
    }
}

export default connect(mapStateToProps, { follow, unfollow, requestUsers })(
    UsersList
)
