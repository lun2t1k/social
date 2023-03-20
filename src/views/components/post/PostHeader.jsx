import UserDefaultAvatar from "../UserAvatar"

export default function PostHeader({ userPhoto, userName }) {
    return (
        <div className="mb-4 flex items-center">
            { userPhoto ? (
                <div className="flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full bg-slate-400">
                    <img
                        src={ userPhoto }
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
            ) : (
                <UserDefaultAvatar size='md' />
            ) }
            <span className="ml-3 font-semibold capitalize w-full">{ userName }</span>
        </div>
    )
}
