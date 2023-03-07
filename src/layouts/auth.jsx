import HeaderContainer from "../components/header/Header";
import Login from '../pages/login/Login';
import Footer from "./../components/Footer";

const AuthLayout = () => {
    return (
        <>
            <HeaderContainer />
            <main className="mb-20 pt-[250px]">
                <div className="container-props">
                    <Login />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AuthLayout;
