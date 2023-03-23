import { componentWrapper } from '../../../../helpers/theme'
import UserAvatarWrapper from './UserAvatarWrapper'
import UserCover from './UserCover'
import UserInfo from './UserInfo'

export default function User({ isOwner, profile, updateUserPhoto, status, updateStatus }) {
    return (
        <div className={ componentWrapper.default }>
            <UserCover userCover={ profile.cover } />
            <div className='relative flex p-5'>
                <UserAvatarWrapper
                    isOwner={ isOwner }
                    userPhoto={ profile.photos.large }
                    updateUserPhoto={ updateUserPhoto }
                />
                <UserInfo
                    profile={ profile }
                    status={ status }
                    updateStatus={ updateStatus }
                />
            </div>
        </div>
    )
}
