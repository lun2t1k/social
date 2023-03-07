import UserAvatar from "./UserAvatar";
import UserCover from "./UserCover";
import UserInfo from "./UserInfo";

export default function User(props) {
    return (
        <div className="user w-full overflow-hidden rounded-2xl bg-white">
            <UserCover userCover={props.userCover} />
            <div className="relative flex p-5">
                <UserAvatar userPhoto={props.userPhoto} />
                <UserInfo
                    userName={props.userName}
                    userStatus={props.userStatus}
                    updateStatus={props.updateStatus}
                    userBirthday={props.userBirthday}
                    userLocation={props.userLocation}
                    userEducation={props.userEducation}
                    userContacts={props.userContacts}
                />
            </div>
        </div>
    );
}
