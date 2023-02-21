import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import profileAPI from '../../api/profileAPI';
import { setUserProfile } from '../../redux/profilePageReducer';
import ProfileLoader from './ProfileLoader';
import Profile from './Profile';

export default function ProfileWrap(props) {
    const location = useLocation()
    const params = useParams()
    return <ProfileContainer location={location} params={params} />
}

class ProfileAPI extends React.Component {
    componentDidMount() {
        this.props.setUserProfile(null);
        let userID;
        if (!this.props.params.userID) {
            userID = 2
        } else {
            userID = this.props.params.userID;
        }
        profileAPI.getProfileRequest(userID).then(data => this.props.setUserProfile(data));
    }
    render() {
        if (!this.props.profile) {
            return <ProfileLoader />
        } else {
            return <Profile {...this.props} profile={this.props.profile} />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPI);
