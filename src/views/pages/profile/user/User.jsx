import UserAvatar from "./UserAvatar"
import UserCover from "./UserCover"
import UserInfo from "./UserInfo"

export default function User({
    userCover,
    userPhoto,
    userName,
    userStatus,
    updateStatus,
    userBirthday,
    userLocation,
    userEducation,
    userContacts
}) {
    return (
        <div className="user w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
            <UserCover userCover={ userCover } />
            <div className="relative flex p-5">
                <UserAvatar userPhoto={ userPhoto } />
                <UserInfo
                    userName={ userName }
                    userStatus={ userStatus }
                    updateStatus={ updateStatus }
                    userBirthday={ userBirthday }
                    userLocation={ userLocation }
                    userEducation={ userEducation }
                    userContacts={ userContacts }
                />
            </div>
        </div>
    )
}
