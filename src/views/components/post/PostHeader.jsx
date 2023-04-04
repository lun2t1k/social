import UserAvatar from '../UserAvatar'

export default function PostHeader({userPhoto, userName}) {
    return (
        <div className='mb-4 flex items-center'>
            <UserAvatar img={userPhoto} size='md' />
            <span className='ml-3 w-full break-all font-semibold capitalize'>
                {userName}
            </span>
        </div>
    )
}
