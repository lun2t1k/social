import styles from "./User.module.css"
import UserDefaultAvatar from "./UserDefaultAvatar"

export default function UserAvatar(props) {
    return (
        <div className={ styles.userAvatar + " absolute -top-[70px] md:!left-5" }>
            <div className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full border-4 border-white bg-slate-400 dark:border-zinc-900">
                { props.userPhoto ? (
                    <img
                        src={ props.userPhoto }
                        alt=""
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <UserDefaultAvatar />
                ) }
            </div>
        </div>
    )
}
