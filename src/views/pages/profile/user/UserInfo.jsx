import UserStatus from './UserStatus'
import BirthdayIcon from '../../../components/icons/BirthdayIcon'
import LocationIcon from '../../../components/icons/LocationIcon'
import EducationIcon from '../../../components/icons/EducationIcon'
import LinkIcon from '../../../components/icons/LinkIcon'

export default function UserInfo({ profile, status, updateStatus }) {
    const userInfo = [
        {
            id: 'userBirthday',
            info: profile.birthday,
            icon: <BirthdayIcon />
        },
        {
            id: 'userLocation',
            info: profile.location,
            icon: <LocationIcon />
        },
        {
            id: 'userEducation',
            info: profile.education,
            icon: <EducationIcon />
        },
        {
            id: 'userContacts',
            info: profile.contacts.github,
            icon: <LinkIcon />
        }
    ]

    return (
        <div className='w-full pt-[110px] md:pt-0 md:pl-[200px] text-center md:text-left'>
            <h2 className='mb-2 block w-full text-2xl font-semibold capitalize'>
                { profile.fullName }
            </h2>
            <UserStatus
                status={ status }
                updateStatus={ updateStatus }
            />
            <ul className='flex flex-wrap gap-4 justify-center md:justify-start mt-4'>
                {
                    userInfo.map(i => {
                        return (
                            <li
                                key={ i.id }
                                className='flex items-center gap-1 text-zinc-500'
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
