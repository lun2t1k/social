import { Route, Routes, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/header/Header'
import Navbar from './../components/navbar/Navbar'
import ProfileContainer from './../pages/profile/ProfileContainer'
import News from './../pages/news/News'
import Messages from './../pages/messages/Messages'
import Friends from './../pages/friends/Friends'
import Music from './../pages/music/Music'
import MobileNavbar from '../components/mobileNavbar/MobileNavbar'

const MainLayoutContainer = props => {
    if (props.isAuth) {
        return (
            <>
                <Header />
                <main className='pb-[88px] pt-[76px] md:pb-[20px]'>
                    <div className='container-props'>
                        <div className='flex flex-col gap-5 md:flex-row'>
                            <Navbar />
                            <section className='flex flex-auto flex-col gap-5'>
                                <Routes>
                                    <Route path='/profile/:userID?' element={<ProfileContainer />} />
                                    <Route path='/news' element={<News />} />
                                    <Route path='/messages/*' element={<Messages />} />
                                    <Route path='/friends' element={<Friends />} />
                                    <Route path='/music' element={<Music />} />
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
        isAuth: state.auth.isAuth
    }
}

const MainLayout = connect(mapStateToProps, null)(MainLayoutContainer)

export default MainLayout
