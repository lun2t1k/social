import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { container } from '../../helpers/theme'
import { getIsAuth } from '../../redux/ducks/login'
import Login from '../pages/login/Login'

const AuthLayout = ({ isAuth }) => {
    if (isAuth) return <Navigate replace to='/news' />

    return (
        <main className='flex tall:h-[100vh] w-full items-center justify-center p-10'>
            <div className={ container.size.default }>
                <Login />
            </div>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: getIsAuth(state)
    }
}

export default connect(mapStateToProps, null)(AuthLayout)
