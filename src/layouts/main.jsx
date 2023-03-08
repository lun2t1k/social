import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "./../components/navbar/Navbar";
import ProfileContainer from "./../pages/profile/ProfileContainer";
import News from "./../pages/news/News";
import Messages from "./../pages/messages/Messages";
import Users from "./../pages/users/Users";
import Music from "./../pages/music/Music";
import MobileNavbar from "../components/mobileNavbar/MobileNavbar";

const MainLayout = (props) => {
    return (
        <>
            <Header />
            <main className="pb-[116px] pt-[76px] md:pb-[20px]">
                <div className="container-props">
                    <div className="flex flex-col gap-5 md:flex-row">
                        <Navbar />
                        <section className="flex flex-auto flex-col gap-5">
                            <Routes>
                                <Route path="/profile/:userID?" element={<ProfileContainer />} />
                                <Route path="/" element={<News />} />
                                <Route path="/messages/*" element={<Messages />} />
                                <Route path="/users" element={<Users />} />
                                <Route path="/music" element={<Music />} />
                            </Routes>
                        </section>
                    </div>
                </div>
            </main>
            <MobileNavbar />
        </>
    );
};

export default MainLayout;
