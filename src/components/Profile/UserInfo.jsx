export default function UserInfo() {
    return (
        <div className="profile w-full bg-white rounded-3xl overflow-hidden">
            <div className="profile-cover">
                <img src="" alt="" className="w-full h-[200px] bg-slate-400" />
            </div>
            <div className="profile-info flex p-5 relative">
                <div className="profile-info-avatar absolute -top-[70px]">
                    <div className="profile-info-avatar-wrap w-[200px] h-[200px]">
                        <img
                            src=""
                            alt=""
                            className="w-full h-full rounded-full bg-slate-400"
                        />
                    </div>
                </div>
                <div className="profile-info-data w-full pt-[140px] lg:pt-0 lg:pl-[230px]">
                    <h2 className="block w-full mb-4 text-5xl">User Name</h2>
                    <ul>
                        <li>
                            <span className="profile-info-data__key">
                                Date of Birth:{" "}
                            </span>
                            <span className="profile-info-data__value">
                                10.10.1999
                            </span>
                        </li>
                        <li>
                            <span className="profile-info-data__key">
                                City:{" "}
                            </span>
                            <span className="profile-info-data__value">
                                Russia, Omsk
                            </span>
                        </li>
                        <li>
                            <span className="profile-info-data__key">
                                Education:{" "}
                            </span>
                            <span className="profile-info-data__value">
                                College
                            </span>
                        </li>
                        <li>
                            <span className="profile-info-data__key">
                                Web Site:{" "}
                            </span>
                            <span className="profile-info-data__value">
                                <a href="/">google.com</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
