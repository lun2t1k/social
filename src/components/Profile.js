import Navigation from "./Navigation";

export default function Profile() {
    return (
        <main>
            <div className="container px-3 mx-auto">
                <div className="flex gap-4">
                    <Navigation />

                    <section className="profile w-full md:w-4/5 bg-blue-300">
                        <div className="profile-cover">
                            <img src="" alt="" className="w-full h-20 bg-slate-500" />
                        </div>
                        <div className="profile-info flex">
                            <div className="profile-info__avatar w-1/5">
                                <img src="" alt="" className="bg-slate-500" width="200" height="200" />
                            </div>
                            <div className="profile-info__data w-4/5">
                                <h2>User Name</h2>
                                <p>Date of Birth:</p>
                                <p>City:</p>
                                <p>Education:</p>
                                <p>Web Site:</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}