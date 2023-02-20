import { BrowserRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App(props) {
    return (
        <BrowserRouter>
            <HeaderContainer />
            <Main />
            <Footer />
        </BrowserRouter>
    );
}
