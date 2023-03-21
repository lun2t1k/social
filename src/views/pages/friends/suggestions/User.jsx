import { NavLink } from 'react-router-dom'
import { button } from '../../../../helpers/theme'
import Spinner from '../../../components/Spinner'
import UserAvatar from '../../../components/UserAvatar'

export default function User({ user, followingQueue, ...props }) {
    const disabled = () => followingQueue.some(userID => userID === user.id)

    return (
        <li
            id={ user.id }
            className='flex items-center justify-between border-b py-2 last:border-b-0 last:pb-0 dark:border-zinc-800'
        >
            <div className='flex min-w-0 items-center gap-2'>
                <NavLink to={ `/profile/${user.id}` }>
                    <UserAvatar img={ user.photos.small } size='md' />
                </NavLink>
                <NavLink to={ `/profile/${user.id}` } className='truncate'>
                    { user.name }
                </NavLink>
            </div>
            <button
                onClick={ () =>
                    user.followed
                        ? props.unfollow(user.id)
                        : props.follow(user.id)
                }
                disabled={ disabled() }
                className={
                    button.default +
                    button.disabled +
                    button.size.sm +
                    'ml-3 text-xs'
                }
            >
                { disabled() ? (
                    <Spinner size='sm' />
                ) : user.followed ? (
                    'Unfollow'
                ) : (
                    'Follow'
                ) }
            </button>
        </li>
    )
}
