import { NavLink } from 'react-router-dom'
import UserAvatar from '../../../components/UserAvatar'

export default function ChatsItem({ chat }) {
    let defaultClassName =
        ' p-2 lg:pl-5 lg:pr-2 first:pt-2 last:pb-2 flex gap-3 items-center md:hover:bg-slate-100 dark:md:hover:bg-zinc-800 transition-all ease-in '

    return (
        <NavLink
            to={ `/messages/${chat.id}` }
            className={ ({ isActive }) =>
                isActive
                    ? defaultClassName +
                      'bg-violet-400 text-white hover:!bg-violet-400 dark:bg-violet-400 dark:hover:!bg-violet-400'
                    : defaultClassName
            }
        >
            <UserAvatar img={ chat.avatar } size='2md' />
            <div className='hidden min-w-0 flex-col gap-1 lg:flex'>
                <h5 className='font-semibold'>
                    { chat.name ? chat.name : 'Undefined' }
                </h5>
                <span className='truncate text-xs'>{ chat.lastMessage }</span>
            </div>
        </NavLink>
    )
}
