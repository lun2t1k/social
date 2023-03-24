import { Route, Routes, Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { container } from '../../helpers/theme'
import { getIsAuth, getAuthorizedUserProfile } from '../../redux/ducks/login'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import MobileNavbar from '../components/navbar/MobileNavbar'
import routes from '../../routes'

const MainLayout = ({ isAuth, authorizedUserProfile }) => {
    let params = useParams()

    if (!isAuth) return <Navigate replace to='/login' />
    if (params['*'] === '') return <Navigate replace to='/news' />

    return (
        <>
            <Header authorizedUserAvatar={ authorizedUserProfile.photos.small } />
            <main className='pb-[88px] pt-[76px] md:pb-[20px]'>
                <div className={ container.size.default }>
                    <div className='flex flex-col gap-5 md:flex-row'>
                        <Navbar />
                        <section className='flex flex-auto flex-col gap-5'>
                            <Routes>
                                { routes.map(route => {
                                    return (
                                        <Route
                                            key={ route.path }
                                            path={ route.path }
                                            element={ route.component }
                                        />
                                    )
                                }) }
                            </Routes>
                        </section>
                    </div>
                </div>
            </main>
            <MobileNavbar />
        </>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: getIsAuth(state),
        authorizedUserProfile: getAuthorizedUserProfile(state)
    }
}

export default connect(mapStateToProps, null)(MainLayout)
