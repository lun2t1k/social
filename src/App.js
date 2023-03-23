import { Provider } from 'react-redux'
import store from './redux/store'
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './views/layouts/main'
import AuthLayout from './views/layouts/auth'
import ScrollToTop from './views/components/ScrollToTop'

// ! HashRouter is used for GitHub page
// ! Use BrowserRouter with basename={ process.env.PUBLIC_URL } instead of it

const App = () => {
    return (
        <Provider store={ store }>
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    <Route path='*' element={ <MainLayout /> } />
                    <Route path='/login' element={ <AuthLayout /> } />
                </Routes>
            </HashRouter>
        </Provider>
    )
}

export default App
