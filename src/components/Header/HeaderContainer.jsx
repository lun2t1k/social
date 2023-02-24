import React from 'react';
import { connect } from 'react-redux';
import { authMe } from './../../redux/authReducer';
import Header from './Header';

class HeaderAPI extends React.Component {
    componentDidMount() {
        // ! The request doesn't get the right response, although I logged in
        authMe();
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

const HeaderContainer = connect(mapStateToProps, {authMe})(HeaderAPI)

export default HeaderContainer;