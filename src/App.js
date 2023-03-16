import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './views/layouts/main'
import AuthLayout from './views/layouts/auth'

const App = () => {
    return (
        <Provider store={ store }>
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={ <MainLayout /> } />
                    <Route path='/login' element={ <AuthLayout /> } />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
