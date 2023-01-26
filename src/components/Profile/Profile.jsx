import Navigation from "../Navigation";
import NewPost from "./NewPost";
import Posts from "./Posts";
import UserInfo from "./UserInfo";

export default function Profile() {
    return (
        <main>
            <div className="container-props">
                <div className="flex gap-4">
                    <Navigation />

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
