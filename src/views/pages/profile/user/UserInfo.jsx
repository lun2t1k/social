import UserStatus from './UserStatus'
import BirthdayIcon from '../../../components/icons/BirthdayIcon'
import LocationIcon from '../../../components/icons/LocationIcon'
import EducationIcon from '../../../components/icons/EducationIcon'
import LinkIcon from '../../../components/icons/LinkIcon'
import BriefcaseIcon from '../../../components/icons/BriefcaseIcon'

export default function UserInfo({isOwner, profile, status, updateStatus}) {
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
            id: 'userSkills',
            info: profile.lookingForAJobDescription,
            icon: <BriefcaseIcon />
        },
        {
            id: 'userContacts',
            info: profile.contacts.mainLink,
            icon: <LinkIcon />
        }
    ]

    return (
        <div className='w-full pt-[110px] md:pt-0 md:pl-[200px] md:text-left'>
            <div className='mx-auto flex max-w-[435px] flex-col md:mx-0 md:max-w-full'>
                <h2 className='mb-2 block w-full break-all text-center text-2xl font-semibold capitalize md:text-left lg:max-w-[70%]'>
                    {profile.fullName}
                </h2>
                <UserStatus
                    isOwner={isOwner}
                    status={status}
                    updateStatus={updateStatus}
                />
                <ul className='flex flex-wrap justify-center gap-4 md:justify-start'>
                    {userInfo.map(i => (
                        <li key={i.id} className='flex gap-1 text-zinc-500'>
                            <div className='flex-[0_0_auto]'>{i.icon}</div>
                            {i.info}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
