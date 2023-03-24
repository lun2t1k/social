import UserStatus from './UserStatus'
import BirthdayIcon from '../../../components/icons/BirthdayIcon'
import LocationIcon from '../../../components/icons/LocationIcon'
import EducationIcon from '../../../components/icons/EducationIcon'
import LinkIcon from '../../../components/icons/LinkIcon'
import BriefcaseIcon from '../../../components/icons/BriefcaseIcon'

export default function UserInfo({ isOwner, profile, status, updateStatus }) {
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
            info: profile.contacts.mainLink,
            icon: <LinkIcon />
        },
        {
            id: 'userSkills',
            info: profile.lookingForAJobDescription,
            icon: <BriefcaseIcon />
        }
    ]

    return (
        <div className='w-full pt-[110px] text-center md:pt-0 md:pl-[200px] md:text-left'>
            <h2 className='mb-2 block w-full break-all text-2xl font-semibold capitalize lg:max-w-[70%]'>
                { profile.fullName }
            </h2>
            <UserStatus
                isOwner={ isOwner }
                status={ status }
                updateStatus={ updateStatus }
            />
            <ul className='flex flex-wrap justify-center gap-4 md:justify-start'>
                { userInfo.map(i => (
                    <li
                        key={ i.id }
                        className='flex items-center gap-1 text-zinc-500'
                    >
                        { i.icon }
                        { i.info }
                    </li>
                )) }
            </ul>
        </div>
    )
}
