import {userAvatar, imageStyles} from '../../helpers/theme'

export default function UserAvatar({img, size, extraClasses}) {
    return (
        <div
            className={`flex ${userAvatar.size[size]} flex-[0_0_auto] items-center justify-center overflow-hidden rounded-full bg-slate-400 ${extraClasses}`}
        >
            {img ? (
                <img
                    src={img}
                    alt=''
                    className={
                        imageStyles.size.full + imageStyles.objectFit.cover
                    }
                />
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1}
                    stroke='white'
                    className='h-[80%] w-[80%]'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                    />
                </svg>
            )}
        </div>
    )
}
