import React from 'react';
import { connect } from 'react-redux';
import authAPI from '../../api/authAPI';
import setUserData from './../../redux/authReducer'
import Header from './Header';

class HeaderAPI extends React.Component {
    componentDidMount() {
        // ! The request doesn't get the right response, although I logged in
        authAPI.getAuthStatus().then((data) => {
            if (data.resultCode === 0) {
                let {userID, login, email} = data.data;
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
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPI)

export default HeaderContainer;