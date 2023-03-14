import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Login from '../pages/login/Login'

const AuthLayoutContainer = props => {
    if (props.isAuth) {
        return <Navigate replace to='/news' />
    } else {
        return (
            <main className='flex h-[100vh] w-full items-center justify-center'>
                <div className='container-props'>
                    <Login />
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

const AuthLayout = connect(mapStateToProps, null)(AuthLayoutContainer)

export default AuthLayout
