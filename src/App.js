import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="pt-[118px] mb-20">
                <div className="container-props">
                    <div className="flex gap-4">
                        <Navbar />
                        <section className="w-full md:w-4/5 flex flex-col gap-4">
                            <Routes>
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/messages" element={<Messages />} />
                            </Routes>
                        </section>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    );
}
