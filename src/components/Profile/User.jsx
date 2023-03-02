import ProfileStatus from './ProfileStatus';

export default function User(props) {
    return (
        <div className="user w-full bg-white rounded-3xl overflow-hidden">
            <div className="w-full h-[200px] bg-slate-400">
                {props.userCover ? (<img src="" alt="" className="w-full h-full object-cover" />) : null}
            </div>
            <div className="flex p-5 relative">
                <div className="absolute -top-[70px]">
                    <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full overflow-hidden bg-slate-400">
                        {props.userPhoto ? (
                            <img
                                src={props.userPhoto}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="white"
                                className="w-[150px] h-[150px]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                        )}
                    </div>
                </div>
                <div className="w-full pt-[140px] lg:pt-0 lg:pl-[230px]">
                    <h2 className="block w-full mb-2 text-5xl capitalize">{props.userName}</h2>
                    <ProfileStatus userStatus={props.userStatus} />
                    <ul>
                        <li>
                            <span className="text-xl text-gray-500"> Birthday: </span>
                            <span className="text-xl">{props.userBirthday ? props.userBirthday : null}</span>
                        </li>
                        <li>
                            <span className="text-xl text-gray-500">Location: </span>
                            <span className="text-xl">{props.userLocation ? props.userLocation : null}</span>
                        </li>
                        <li>
                            <span className="text-xl text-gray-500"> Education: </span>
                            <span className="text-xl">{props.userEducation ? props.userEducation : null}</span>
                        </li>
                        <li>
                            <span className="text-xl text-gray-500"> GitHub: </span>
                            <span className="text-xl">
                                <a
                                    href={props.userContacts.github}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="hover:text-purple-accent"
                                >
                                    {props.userContacts.github ? props.userContacts.github : null}
                                </a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
