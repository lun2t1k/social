import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    setProfile,
    updateUserPhoto,
    setStatus,
    updateStatus,
    getAuthorizedUserId,
    getProfile,
    getStatus
} from '../../../redux/ducks/profile'
import ProfileSkeleton from './ProfileSkeleton'
import User from './user/User'
import NewPostForm from './NewPostForm'
import Posts from './Posts'

const Profile = ({
    setProfile,
    updateUserPhoto,
    setStatus,
    updateStatus,
    profile,
    authorizedUserId,
    status
}) => {
    useEffect(() => {
        document.title = 'Profile'
    }, [])
    
    let params = useParams()

    useEffect(() => {
        let userID = params.userID
        if (!userID) {
            userID = authorizedUserId
        }
        setProfile(userID)
        setStatus(userID)
    }, [authorizedUserId, params, setProfile, setStatus])

    if (!profile) {
        return <ProfileSkeleton />
    }

    return (
        <>
            <User
                isOwner={ (profile.userId == authorizedUserId) }
                profile={ profile }
                updateUserPhoto={ updateUserPhoto }
                status={ status }
                updateStatus={ updateStatus }
            />
            <NewPostForm userPhoto={ profile.photos.small } />
            <Posts
                userPhoto={ profile.photos.small }
                userName={ profile.fullName }
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        authorizedUserId: getAuthorizedUserId(state),
        profile: getProfile(state),
        status: getStatus(state)
    }
}

export default connect(mapStateToProps, {
    setProfile,
    updateUserPhoto,
    setStatus,
    updateStatus
})(Profile)
