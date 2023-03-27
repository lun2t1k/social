import { Formik, Form } from 'formik'
import { button } from '../../../../../helpers/theme'
import { EditProfileSchema } from '../../../../../helpers/yup'
import Spinner from '../../../../components/Spinner'
import Input from './Input'
import Checkbox from './Checkbox'

export default function EditProfileForm({
    profile,
    setEditMode,
    updateUserProfile
}) {
    const handleSubmit = value => {
        updateUserProfile(value)
        setEditMode(false)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Formik
            initialValues={ {
                fullName: profile.fullName,
                status: profile.status || '',
                aboutMe: profile.aboutMe || '',
                birthday: profile.birthday || '',
                location: profile.location || '',
                education: profile.education || '',
                lookingForAJob: profile.lookingForAJob || false,
                lookingForAJobDescription:
                    profile.lookingForAJobDescription || '',
                contacts: {
                    github: profile.contacts.github || '',
                    vk: profile.contacts.vk || '',
                    facebook: profile.contacts.facebook || '',
                    instagram: profile.contacts.instagram || '',
                    twitter: profile.contacts.twitter || '',
                    website: profile.contacts.website || '',
                    youtube: profile.contacts.youtube || '',
                    mainLink: profile.contacts.mainLink || ''
                }
            } }
            validationSchema={ EditProfileSchema }
            onSubmit={ handleSubmit }
        >
            { ({ isSubmitting, isValid }) => (
                <Form className='flex w-full max-w-[400px] flex-col gap-6 pt-[120px] md:max-w-full md:pt-0 md:pl-[200px]'>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-lg font-semibold'>
                            Personal information
                        </h3>

                        <Input
                            label='Full name'
                            type='text'
                            name='fullName'
                            id='fullName'
                            required
                        />

                        <Input
                            label='Status'
                            type='text'
                            name='status'
                            id='status'
                        />

                        <Input
                            label='Birthday'
                            type='text'
                            name='birthday'
                            id='birthday'
                            placeholder='dd.mm.yyyy'
                        />

                        <Input
                            label='Location'
                            type='text'
                            name='location'
                            id='location'
                        />

                        <Input
                            label='Education'
                            type='text'
                            name='education'
                            id='education'
                        />

                        <Input
                            label='Professional skills'
                            type='text'
                            name='lookingForAJobDescription'
                            id='lookingForAJobDescription'
                        />

                        <Checkbox
                            label='Looking for a job'
                            type='checkbox'
                            name='lookingForAJob'
                            id='lookingForAJob'
                        />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h3 className='text-lg font-semibold'>Contacts</h3>

                        <Input
                            label='GitHub'
                            type='text'
                            name='contacts.github'
                            id='github'
                            placeholder='https://github.com/username'
                        />

                        <Input
                            label='VK'
                            type='text'
                            name='contacts.vk'
                            id='vk'
                            placeholder='https://vk.com/username'
                        />

                        <Input
                            label='Facebook'
                            type='text'
                            name='contacts.facebook'
                            id='facebook'
                            placeholder='https://facebook.com/username'
                        />

                        <Input
                            label='Instagram'
                            type='text'
                            name='contacts.instagram'
                            id='instagram'
                            placeholder='https://instagram.com/username'
                        />

                        <Input
                            label='Twitter'
                            type='text'
                            name='contacts.twitter'
                            id='twitter'
                            placeholder='https://twitter.com/username'
                        />

                        <Input
                            label='YouTube'
                            type='text'
                            name='contacts.youtube'
                            id='youtube'
                            placeholder='https://youtube.com/@username'
                        />

                        <Input
                            label='Website'
                            type='text'
                            name='contacts.website'
                            id='website'
                            placeholder='https://website.com'
                        />

                        <Input
                            label='Main link'
                            type='text'
                            name='contacts.mainLink'
                            id='mainLink'
                            placeholder='https://link.com'
                        />
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h3 className='text-lg font-semibold'>Interests</h3>

                        <Input
                            label='About me'
                            type='text'
                            name='aboutMe'
                            id='aboutMe'
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={ !isValid || isSubmitting }
                        className={
                            button.default +
                            button.disabled +
                            'flex w-full items-center justify-center py-2 px-3 text-center font-semibold'
                        }
                    >
                        { isSubmitting ? <Spinner size='md' /> : 'Save changes' }
                    </button>
                </Form>
            ) }
        </Formik>
    )
}
