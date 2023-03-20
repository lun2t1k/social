import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setProfile, setStatus, updateStatus, getAuthorizedUserId, getProfile, getStatus } from '../../../redux/ducks/profile'
import ProfileSkeleton from './ProfileSkeleton'
import User from './user/User'
import NewPostForm from './NewPostForm'
import Posts from './Posts'

const Profile = ({ setProfile, setStatus, updateStatus, profile, authorizedUserId, status }) => {
    const params = useParams()

    useEffect(() => {
        let userID = params.userID
        if (!userID) {
            userID = authorizedUserId
        }
        setProfile(userID)
        setStatus(userID)
    }, [authorizedUserId, params.userID, setProfile, setStatus])

    if (!profile) {
        return <ProfileSkeleton />
    } else {
        return (
            <>
                <User
                    profile={ profile }
                    status={ status }
                    updateStatus={ updateStatus }
                />
                <NewPostForm userPhoto={ profile.photos.small } />
                <Posts userPhoto={ profile.photos.small } userName={ profile.fullName } />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        authorizedUserId: getAuthorizedUserId(state),
        profile: getProfile(state),
        status: getStatus(state)
    }
}

export default connect(mapStateToProps, { setProfile, setStatus, updateStatus })(Profile)