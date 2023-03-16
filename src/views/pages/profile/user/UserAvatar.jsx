import styles from "./User.module.css"
import UserDefaultAvatar from "../../../components/UserDefaultAvatar"

export default function UserAvatar({ userPhoto }) {
    return (
        <div className={ styles.userAvatar + " absolute -top-[70px] md:!left-5 flex items-center justify-center overflow-hidden rounded-full border-[5px] border-white bg-slate-400 dark:border-zinc-900" }>
            { userPhoto ? (
                <div className="h-[180px] w-[180px] flex items-center justify-center">
                    <img
                        src={ userPhoto }
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
            ) : (
                <UserDefaultAvatar width='180' height='180' />
            ) }
        </div>
    )
}
