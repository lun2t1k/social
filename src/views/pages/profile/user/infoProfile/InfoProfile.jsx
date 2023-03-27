import BirthdayIcon from '../../../../components/icons/BirthdayIcon'
import LocationIcon from '../../../../components/icons/LocationIcon'
import EducationIcon from '../../../../components/icons/EducationIcon'
import LinkIcon from '../../../../components/icons/LinkIcon'
import MignifyingGlassCircleIcon from '../../../../components/icons/MignifyingGlassCircleIcon'
import BriefcaseIcon from '../../../../components/icons/BriefcaseIcon'
import BarsBottomLeftIcon from '../../../../components/icons/BarsBottomLeftIcon'
import GlobeAltIcon from '../../../../components/icons/GlobeAltIcon'
import GithubIcon from '../../../../components/icons/GithubIcon'
import VkIcon from '../../../../components/icons/VkIcon'
import FacebookIcon from '../../../../components/icons/FacebookIcon'
import InstagramIcon from '../../../../components/icons/InstagramIcon'
import TwitterIcon from '../../../../components/icons/TwitterIcon'
import YoutubeIcon from '../../../../components/icons/YoutubeIcon'

export default function InfoProfile({ profile }) {
    const infos = [
        {
            icon: <BirthdayIcon />,
            title: 'Birthday',
            value: profile.birthday
        },
        {
            icon: <LocationIcon />,
            title: 'Location',
            value: profile.location
        },
        {
            icon: <EducationIcon />,
            title: 'Education',
            value: profile.education
        },
        {
            icon: <BriefcaseIcon />,
            title: 'Professional skills',
            value: profile.lookingForAJobDescription
        },
        {
            icon: <MignifyingGlassCircleIcon />,
            title: 'Looking for a job',
            value: profile.lookingForAJob ? 'Yes' : 'No'
        }
    ]

    const contacts = [
        {
            icon: <GithubIcon />,
            title: 'GitHub',
            value: profile.contacts.github
        },
        {
            icon: <VkIcon />,
            title: 'VK',
            value: profile.contacts.vk
        },
        {
            icon: <FacebookIcon />,
            title: 'Facebook',
            value: profile.contacts.facebook
        },
        {
            icon: <InstagramIcon />,
            title: 'Instagram',
            value: profile.contacts.instagram
        },
        {
            icon: <TwitterIcon />,
            title: 'Twitter',
            value: profile.contacts.twitter
        },
        {
            icon: <YoutubeIcon />,
            title: 'YouTube',
            value: profile.contacts.youtube
        },
        {
            icon: <GlobeAltIcon />,
            title: 'Website',
            value: profile.contacts.website
        },
        {
            icon: <LinkIcon />,
            title: 'Main link',
            value: profile.contacts.mainLink
        }
    ]

    return (
        <div className='w-full pt-[110px] md:pt-0 md:pl-[200px]'>
            <div className='mx-auto flex max-w-[435px] flex-col gap-3 divide-y dark:divide-zinc-800 md:mx-0 md:max-w-full lg:max-w-[65%]'>
                <div className='flex flex-col gap-2'>
                    <h2 className='block w-full break-all text-center text-2xl font-semibold capitalize md:text-left lg:max-w-[70%]'>
                        { profile.fullName }
                    </h2>
                    <div className='flex gap-3 text-zinc-500'>
                        <div className='flex-[0_0_auto]'>
                            <BarsBottomLeftIcon />
                        </div>
                        <span className='text-black dark:text-zinc-100'>
                            { profile.status }
                        </span>
                    </div>
                </div>
                <ul className='flex flex-col gap-2 pt-3'>
                    { infos.map(info => (
                        <li
                            key={ info.title }
                            className='flex gap-3 text-zinc-500'
                        >
                            <div className='flex-[0_0_auto]'>
                                { info.icon }
                            </div>
                            <div>
                                <span>{ info.title }: </span>
                                <span className='text-black dark:text-zinc-100'>
                                    { info.value }
                                </span>
                            </div>
                        </li>
                    )) }
                </ul>
                <ul className='flex flex-col gap-2 pt-3'>
                    { contacts.map(contact => (
                        <li
                            key={ contact.title }
                            className='flex gap-3 text-zinc-500'
                        >
                            <div className='flex-[0_0_auto]'>
                                { contact.icon }
                            </div>
                            <div>
                                <span>{ contact.title }: </span>
                                <a
                                    href={ contact.value }
                                    target='_blank'
                                    rel='noreferrer'
                                    className='text-violet-400 transition-all ease-in hover:text-violet-500'
                                >
                                    { contact.value }
                                </a>
                            </div>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    )
}
