import { componentWrapper } from '../../../../helpers/theme'
import UserAvatar from './UserAvatar'
import UserCover from './UserCover'
import UserInfo from './UserInfo'

export default function User({ profile, status, updateStatus }) {
    return (
        <div className={ componentWrapper.default }>
            <UserCover userCover={ profile.cover } />
            <div className='relative flex p-5'>
                <UserAvatar userPhoto={ profile.photos.large } />
                <UserInfo
                    profile={ profile }
                    status={ status }
                    updateStatus={ updateStatus }
                />
            </div>
        </div>
    )
}
