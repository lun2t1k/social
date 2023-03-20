import styles from '../Profile.module.css'

export default function UserAvatar({ userPhoto }) {
    return (
        <div className={ styles.userAvatar + ' dark:border-zinc-900' }>
            <UserAvatar img={ userPhoto } size='xl' />
        </div>
    )
}
