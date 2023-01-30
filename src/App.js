import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="pt-[122px] mb-20">
                <div className="container-props">
                    <div className="flex gap-5">
                        <Navbar />
                        <section className="w-full md:w-4/5 flex flex-col gap-5">
                            <Routes>
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/" element={<News />} />
                                <Route path="/messages/*" element={<Messages />} />
                                <Route path="/music" element={<Music />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>
                        </section>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );
}
