import UserAvatar from "./UserAvatar";
import UserCover from "./UserCover";
import UserInfo from "./UserInfo";

export default function User(props) {
    return (
        <div className="user w-full bg-white rounded-3xl overflow-hidden">
            <UserCover />
            <div className="flex p-5 relative">
                <UserAvatar />
                <UserInfo
                    name={props.userName}
                    birthday={props.userBirthday}
                    location={props.userLocation}
                    education={props.userEducation}
                    site={props.userSite}
                    url={props.userURL}
                />
            </div>
        </div>
    );
}
