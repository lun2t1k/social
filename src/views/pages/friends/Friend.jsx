import { NavLink } from 'react-router-dom'
import UserAvatar from '../../components/UserAvatar'

export default function Friend({ friend }) {
    return (
        <li
            id={ friend.id }
            className='relative flex items-center justify-between border-b py-5 last:border-b-0 last:pb-0 dark:border-zinc-800'
        >
            <div className='flex gap-3'>
                <NavLink to={ `/profile/${friend.id}` }>
                    <UserAvatar img={ friend.avatar } size='lg' />
                </NavLink>
                <div className='flex flex-col'>
                    <NavLink
                        to={ `/profile/${friend.id}` }
                        className='mb-1 font-semibold'
                    >
                        { friend.name }
                    </NavLink>
                    <NavLink
                        to={ `mailto:${friend.email}` }
                        className='mb-3 text-xs'
                    >
                        { friend.email }
                    </NavLink>
                    <NavLink
                        to={ `/messages/${friend.id}` }
                        className='text-xs text-violet-400 transition-all ease-in hover:text-violet-500'
                    >
                        Write a message
                    </NavLink>
                </div>
            </div>

            <button className='absolute top-[2px] -right-[12px] p-2'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={ 2 }
                    stroke='currentColor'
                    className='h-6 w-6'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                    />
                </svg>
            </button>
        </li>
    )
}
