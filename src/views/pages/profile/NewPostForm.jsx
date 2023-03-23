import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { addPost } from '../../../redux/ducks/profile'
import { NewPostSchema } from '../../../helpers/yup'
import { componentWrapper, button, textarea } from '../../../helpers/theme'
import UserAvatar from '../../components/UserAvatar'

const NewPostForm = ({ userPhoto, addPost }) => {
    const onSubmit = (values, actions) => {
        addPost(values.newPostText)
        actions.resetForm()
    }

    return (
        <div className={ componentWrapper.default }>
            <div className='p-5'>
                <Formik
                    initialValues={ { newPostText: '' } }
                    validationSchema={ NewPostSchema }
                    onSubmit={ onSubmit }
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

export default connect(null, { addPost })(NewPostForm)
