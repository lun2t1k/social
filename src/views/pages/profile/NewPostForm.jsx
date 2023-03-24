import { Formik, Form, Field } from 'formik'
import { NewPostSchema } from '../../../helpers/yup'
import { componentWrapper, button, textarea } from '../../../helpers/theme'
import UserAvatar from '../../components/UserAvatar'

export default function NewPostForm({ isOwner, userPhoto, addPost }) {
    const handleSubmit = (values, actions) => {
        addPost(values.newPostText)
        actions.resetForm()
    }

    if (!isOwner) {
        return null
    }

    return (
        <div className={ componentWrapper.default }>
            <div className='p-5'>
                <Formik
                    initialValues={ { newPostText: '' } }
                    validationSchema={ NewPostSchema }
                    onSubmit={ handleSubmit }
                >
                    { ({ dirty, isSubmitting, isValid }) => {
                        return (
                            <Form className='flex flex-col gap-3 xs:flex-row'>
                                <div className='flex flex-auto gap-3'>
                                    <UserAvatar img={ userPhoto } size='md' />
                                    <Field
                                        name='newPostText'
                                        as='textarea'
                                        placeholder="What's new?"
                                        required
                                        className={ textarea.default }
                                    />
                                </div>
                                <button
                                    type='submit'
                                    disabled={ !isValid || isSubmitting }
                                    className={
                                        button.default +
                                        button.disabled +
                                        button.size.md +
                                        (dirty ? 'inline' : 'hidden')
                                    }
                                >
                                    Post
                                </button>
                            </Form>
                        )
                    } }
                </Formik>
            </div>
        </div>
    )
}
