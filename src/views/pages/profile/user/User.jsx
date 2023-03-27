import { useEffect, useState } from 'react'
import { componentWrapper, button } from '../../../../helpers/theme'
import EditIcon from '../../../components/icons/EditIcon'
import InfoIcon from '../../../components/icons/InfoIcon'
import XMarkIcon from '../../../components/icons/XMarkIcon'
import EditProfileForm from './editProfile/EditProfileForm'
import InfoProfile from './infoProfile/InfoProfile'
import UserAvatarWrapper from './UserAvatarWrapper'
import UserCover from './UserCover'
import UserInfo from './UserInfo'

export default function User({
    isOwner,
    profile,
    updateUserProfile,
    updateUserPhoto,
    status,
    updateStatus
}) {
    const [ editMode, setEditMode ] = useState(false)
    const [ viewMode, setViewMode ] = useState(false)

    const handleInfoClick = boolean => {
        setViewMode(boolean)
    }

    const handleEditClick = () => {
        setViewMode(false)
        setEditMode(true)
    }

    useEffect(() => {
        setViewMode(false)
        setEditMode(false)
    }, [ profile ])

    return (
        <div className={ componentWrapper.default }>
            <UserCover userCover={ profile.cover } />

            <div
                className={
                    'relative flex justify-center p-5 ' +
                    (status ? '' : 'pb-12')
                }
            >
                <UserAvatarWrapper
                    isOwner={ isOwner }
                    userPhoto={ profile.photos.large }
                    updateUserPhoto={ updateUserPhoto }
                />

                { (editMode && (
                    <EditProfileForm
                        profile={ profile }
                        status={ status }
                        setEditMode={ setEditMode }
                        updateUserProfile={ updateUserProfile }
                    />
                )) ||
                    (viewMode && (
                        <InfoProfile profile={ profile } status={ status } />
                    )) || (
                        <UserInfo
                            isOwner={ isOwner }
                            profile={ profile }
                            status={ status }
                            updateStatus={ updateStatus }
                        />
                    ) }
            </div>

            <div className='absolute top-5 right-5 flex gap-2 lg:top-[270px]'>
                { isOwner &&
                    (editMode || (
                        <button
                            className={ button.default + 'p-2 lg:py-2 lg:px-3' }
                            onClick={ () => handleEditClick() }
                        >
                            <EditIcon classes='h-5 w-5 lg:hidden' />
                            <span className='hidden lg:inline'>
                                Edit profile
                            </span>
                        </button>
                    )) }
                { editMode || (
                    <button
                        className={
                            button.default +
                            (viewMode ? 'p-2' : 'p-2 lg:py-2 lg:px-3')
                        }
                        onClick={ () =>
                            viewMode
                                ? handleInfoClick(false)
                                : handleInfoClick(true)
                        }
                    >
                        { viewMode ? (
                            <XMarkIcon classes='lg:hidden' />
                        ) : (
                            <InfoIcon classes='lg:hidden' />
                        ) }
                        <span className='hidden lg:inline'>
                            { viewMode ? (
                                <XMarkIcon classes='hidden lg:block' />
                            ) : (
                                'More info'
                            ) }
                        </span>
                    </button>
                ) }
            </div>
        </div>
    )
}
