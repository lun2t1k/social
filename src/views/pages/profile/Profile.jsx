import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
    setProfile,
    setAuthorizedProfile,
    setStatus,
    getProfile,
    getStatus
} from '../../../redux/ducks/profile'
import {
    getAuthorizedUserId,
    getAuthorizedUserProfile,
    getAuthorizedUserPosts,
    updateUserProfile,
    updateUserPhoto,
    updateStatus,
    addPost
} from '../../../redux/ducks/login'
import ProfileSkeleton from './ProfileSkeleton'
import User from './user/User'
import NewPostForm from './NewPostForm'
import Posts from './Posts'

const Profile = ({
    setProfile,
    setAuthorizedProfile,
    updateUserProfile,
    updateUserPhoto,
    setStatus,
    updateStatus,
    profile,
    authorizedUserId,
    authorizedUserProfile,
    authorizedUserPosts,
    status,
    addPost
}) => {
    useEffect(() => {
        document.title = 'Profile'
    }, [])

    let params = useParams()

    useEffect(() => {
        let userID = params.userID
        if (!userID) {
            setAuthorizedProfile(authorizedUserProfile)
        } else {
            setProfile(userID)
            setStatus(userID)
        }
    }, [
        authorizedUserId,
        params,
        setProfile,
        setAuthorizedProfile,
        authorizedUserProfile,
        setStatus
    ])

    if (!profile) {
        return <ProfileSkeleton />
    }

    return (
        <>
            <User
                isOwner={ profile.userId == authorizedUserId }
                profile={ profile }
                updateUserProfile={ updateUserProfile }
                updateUserPhoto={ updateUserPhoto }
                status={
                    profile.userId == authorizedUserId
                        ? authorizedUserProfile.status
                        : status
                }
                updateStatus={ updateStatus }
            />
            <NewPostForm
                isOwner={ profile.userId == authorizedUserId }
                userPhoto={ profile.photos.small }
                addPost={ addPost }
            />
            <Posts
                posts={ authorizedUserPosts }
                userPhoto={ profile.photos.small }
                userName={ profile.fullName }
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        authorizedUserId: getAuthorizedUserId(state),
        authorizedUserProfile: getAuthorizedUserProfile(state),
        authorizedUserPosts: getAuthorizedUserPosts(state),
        profile: getProfile(state),
        status: getStatus(state)
    }
}

export default connect(mapStateToProps, {
    setProfile,
    setAuthorizedProfile,
    updateUserProfile,
    updateUserPhoto,
    setStatus,
    updateStatus,
    addPost
})(Profile)
