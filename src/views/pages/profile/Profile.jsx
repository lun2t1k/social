import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setProfile, setStatus, updateStatus } from '../../../redux/ducks/profile'
import ProfileLoader from './ProfileLoader'
import User from './user/User'
import NewPost from './NewPost'
import Posts from './Posts'

const Profile = ({ authorizedUserId, profile, status, setProfile, setStatus, updateStatus }) => {
    const params = useParams()

    useEffect(() => {
        let userId = params.userId
        if (!userId) {
            userId = authorizedUserId
        }
        setProfile(userId)
        setStatus(userId)
    }, [authorizedUserId, params.userId, setProfile, setStatus])

    if (!profile) {
        return <ProfileLoader />
    } else {
        return (
            <>
                <User
                    userCover={ profile.cover }
                    userPhoto={ profile.photos.large }
                    userName={ profile.fullName }
                    userStatus={ status }
                    updateStatus={ updateStatus }
                    userBirthday={ profile.birthday }
                    userLocation={ profile.location }
                    userEducation={ profile.education }
                    userContacts={ profile.contacts }
                />
                <NewPost />
                <Posts userPhoto={ profile.photos.small } userName={ profile.fullName } />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        authorizedUserId: state.login.authorizedUserId,
        profile: state.profile.profile,
        status: state.profile.status
    }
}

export default connect(mapStateToProps, { setProfile, setStatus, updateStatus })(Profile)
