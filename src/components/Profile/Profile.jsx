import "./Profile.css";
import Navbar from "../Navbar/Navbar";
import NewPost from "./NewPost";
import Posts from "./Posts";
import UserInfo from "./UserInfo";

export default function Profile() {
    return (
        <main className="pt-[118px] mb-20">
            <div className="container-props">
                <div className="flex gap-4">
                    <Navbar />

                    <section className="w-full md:w-4/5 flex flex-col gap-4">
                        <UserInfo />
                        <NewPost />
                        <Posts />
                    </section>
                </div>
            </div>
        </main>
    );
}
