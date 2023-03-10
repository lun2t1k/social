import React from 'react'
import { connect } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { setProfile, setStatus, updateStatus } from '../../redux/reducers/profile'
import ProfileLoader from './ProfileLoader'
import Profile from './Profile'

export default function ProfileWrap(props) {
    const location = useLocation()
    const params = useParams()
    return <ProfileContainer location={ location } params={ params } />
}

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userID
        if (!this.props.params.userID) {
            userID = 27904
        } else {
            userID = this.props.params.userID
        }
        this.props.setProfile(userID)
        this.props.setStatus(userID)
    }
    render() {
        if (!this.props.profile) {
            return <ProfileLoader />
        } else {
            return <Profile { ...this.props } profile={ this.props.profile } status={ this.props.status } updateStatus={ this.props.updateStatus } />
        }
    }
}

const mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const ProfileContainer = connect(mapStateToProps, { setProfile, setStatus, updateStatus })(ProfileAPI)
