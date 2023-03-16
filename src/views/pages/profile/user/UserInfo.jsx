import UserStatus from './UserStatus'
import BirthdayIcon from './icons/BirthdayIcon'
import LocationIcon from './icons/LocationIcon'
import EducationIcon from './icons/EducationIcon'
import LinkIcon from './icons/LinkIcon'

export default function UserInfo({
    userName,
    userStatus,
    updateStatus,
    userBirthday,
    userLocation,
    userEducation,
    userContacts
}) {
    const userInfo = [
        {
            id: 'userBirthday',
            info: userBirthday,
            icon: <BirthdayIcon />
        },
        {
            id: 'userLocation',
            info: userLocation,
            icon: <LocationIcon />
        },
        {
            id: 'userEducation',
            info: userEducation,
            icon: <EducationIcon />
        },
        {
            id: 'userContacts',
            info: userContacts.github,
            icon: <LinkIcon />
        }
    ]

    return (
        <div className="w-full pt-[110px] md:pt-0 md:pl-[200px] text-center md:text-left">
            <h2 className="mb-2 block w-full text-2xl font-semibold capitalize">
                { userName }
            </h2>
            <UserStatus
                userStatus={ userStatus }
                updateStatus={ updateStatus }
            />
            <ul className='flex flex-wrap gap-4 justify-center md:justify-start mt-4'>
                {
                    userInfo.map(i => {
                        return (
                            <li
                                key={i.id}
                                className="flex items-center gap-1 text-zinc-500"
                            >
                                { i.icon }
                                { i.info }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
