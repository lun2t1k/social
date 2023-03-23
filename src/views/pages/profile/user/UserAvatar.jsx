import styles from '../Profile.module.css'
import UserAvatarWrapper from '../../../components/UserAvatar'

export default function UserAvatar({ userPhoto }) {
    return (
        <div className={ styles.userAvatar + ' dark:border-zinc-900' }>
            <UserAvatarWrapper img={ userPhoto } size='xl' />
        </div>
    )
}
