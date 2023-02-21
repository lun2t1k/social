import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import setUserData from './../../redux/authReducer'
import Header from './Header';

class HeaderAPI extends React.Component {
    componentDidMount() {
        // ! The request doesn't get the right response, although I logged in
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {userID, login, email} = response.data.data;
                    this.props.setUserData(userID, login, email);
                }
            });
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        profile: state.profilePage.profile
    }
}

const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPI)

export default HeaderContainer;