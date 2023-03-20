import { Route, Routes, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { container } from '../../helpers/theme'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import MobileNavbar from '../components/navbar/MobileNavbar'
import routes from '../../routes'

const MainLayout = ({ isAuth }) => {
    if (isAuth) {
        return (
            <>
                <Header />
                <main className='pb-[88px] pt-[76px] md:pb-[20px]'>
                    <div className={ container.size.default }>
                        <div className='flex flex-col gap-5 md:flex-row'>
                            <Navbar />
                            <section className='flex flex-auto flex-col gap-5'>
                                <Routes>
                                    {
                                        routes.map(route => {
                                            return (
                                                <Route
                                                    key={ route.path }
                                                    path={ route.path }
                                                    element={ route.component }
                                                />
                                            )
                                        })
                                    }
                                </Routes>
                            </section>
                        </div>
                    </div>
                </main>
                <MobileNavbar />
            </>
        )
    } else {
        return <Navigate replace to='/login' />
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.login.isAuth
    }
}

export default connect(mapStateToProps, null)(MainLayout)
