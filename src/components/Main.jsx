import Navbar from "./Navbar/Navbar";
import Messages from "./pages/Messages/Messages";
import Profile from "./pages/Profile/Profile";

export default function Main() {
    return (
        <main className="pt-[118px] mb-20">
            <div className="container-props">
                <div className="flex gap-4">
                    <Navbar />

                    <section className="w-full md:w-4/5 flex flex-col gap-4">
                        {/* <Messages /> */}
                        <Profile />
                    </section>
                </div>
            </div>
        </main>
    );
}
