import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Messages from "./Messages/Messages";
import Users from "./Users/Users";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

export default function Main(props) {
    return (
        <main className="pt-[122px] mb-20">
            <div className="container-props">
                <div className="flex gap-5">
                    <Navbar />
                    <section className="w-full md:w-4/5 flex flex-col gap-5">
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
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
    );
}
