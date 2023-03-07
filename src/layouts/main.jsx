import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "./../components/Footer";
import Navbar from "./../components/navbar/Navbar";
import ProfileContainer from "./../pages/profile/ProfileContainer";
import News from "./../pages/news/News";
import Messages from "./../pages/messages/Messages";
import Users from "./../pages/users/Users";
import Music from "./../pages/music/Music";
import Settings from "./../pages/settings/Settings";

const MainLayout = (props) => {
    return (
        <>
            <Header />
            <main className="mb-20 pt-[122px]">
                <div className="container-props">
                    <div className="flex gap-5">
                        <Navbar />
                        <section className="flex w-full flex-col gap-5 md:w-4/5">
                            <Routes>
                                <Route path="/profile/:userID?" element={<ProfileContainer />} />
                                <Route path="/" element={<News />} />
                                <Route path="/messages/*" element={<Messages />} />
                                <Route path="/users" element={<Users />} />
                                <Route path="/music" element={<Music />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
