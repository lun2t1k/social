import styles from '../Profile.module.css'
import UserAvatar from '../../../components/UserAvatar'

export default function UserAvatarWrapper({
    isOwner,
    userPhoto,
    updateUserPhoto
}) {
    const handleChange = event => {
        updateUserPhoto(event.target.files[0])
    }

    return (
        <div
            className={
                styles.userAvatar + ' overflow-hidden dark:border-zinc-900'
            }
        >
            <UserAvatar img={ userPhoto } size='xl' />

            { isOwner && (
                <div className='absolute bottom-0 flex h-full w-full flex-col justify-end overflow-hidden rounded-full opacity-0 transition-all ease-in hover:opacity-100'>
                    <div className='bg-black/70 pt-1 pb-5 text-center'>
                        <label
                            htmlFor='uploadPhoto'
                            className='block cursor-pointer p-1 text-white md:hover:underline md:hover:underline-offset-2'
                        >
                            <span>
                                { userPhoto ? 'Update photo' : 'Upload photo' }
                            </span>
                            <input
                                type='file'
                                name='uploadPhoto'
                                id='uploadPhoto'
                                className='hidden'
                                onChange={ handleChange }
                            />
                        </label>
                        { userPhoto && (
                            <button className='w-full p-1 text-rose-600 md:hover:underline md:hover:underline-offset-2'>
                                Delete photo
                            </button>
                        ) }
                    </div>
                </div>
            ) }
        </div>
    )
}
