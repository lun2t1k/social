import {useEffect} from 'react'
import {connect} from 'react-redux'
import FriendsSkeleton from './FriendsSkeleton'
import {
    requestFriends,
    getFriends,
    getIsFetchingFriends
} from '../../../redux/ducks/friends'
import Friend from './Friend'

const FriendsList = ({requestFriends, isFetchingFriends, friends}) => {
    useEffect(() => {
        requestFriends()
    }, [requestFriends])

    return (
        <>
            {isFetchingFriends ? (
                <FriendsSkeleton />
            ) : (
                <ul className='w-full'>
                    {friends.map(friend => (
                        <Friend key={friend.id} friend={friend} />
                    ))}
                </ul>
            )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        friends: getFriends(state),
        isFetchingFriends: getIsFetchingFriends(state)
    }
}

export default connect(mapStateToProps, {requestFriends})(FriendsList)
