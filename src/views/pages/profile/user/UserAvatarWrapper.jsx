import styles from '../Profile.module.css'
import UserAvatar from '../../../components/UserAvatar'

export default function UserAvatarWrapper({ isOwner, userPhoto, updateUserPhoto }) {
    const handleChange = (event) => {
        updateUserPhoto(event.target.files[0])
    }

    return (
        <div className={ styles.userAvatar + ' dark:border-zinc-900' }>
            <UserAvatar img={ userPhoto } size='xl' />

            { isOwner &&
                <div className='flex flex-col justify-end opacity-0 hover:opacity-100 transition-all ease-in absolute bottom-0 h-full w-full'>
                    <div className='pt-1 pb-5 text-center bg-black/70'>
                        { userPhoto ? (
                            <>
                                <label
                                    htmlFor='updatePhoto'
                                    className='block cursor-pointer md:hover:underline md:hover:underline-offset-2 p-1'
                                >
                                    <span>Update photo</span>
                                    <input
                                        type='file'
                                        name='updatePhoto'
                                        id='updatePhoto'
                                        className='hidden'
                                        onChange={ handleChange }
                                    />
                                </label>

                                <button
                                    className='w-full text-rose-600 md:hover:underline md:hover:underline-offset-2 p-1'
                                >
                                    Delete photo
                                </button>
                            </>
                        ) : (
                            <label
                                htmlFor='uploadPhoto'
                                className='block cursor-pointer md:hover:underline md:hover:underline-offset-2 p-1'
                            >
                                <span>Upload photo</span>
                                <input
                                    type='file'
                                    name='uploadPhoto'
                                    id='uploadPhoto'
                                    className='hidden'
                                    onChange={ handleChange }
                                />
                            </label>
                        ) }
                    </div>
                </div>
            }
        </div>
    )
}
