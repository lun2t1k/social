import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import { LoginSchema } from '../../../helpers/yup'
import { componentWrapper, button, imageStyles } from '../../../helpers/theme'
import { login } from '../../../redux/ducks/login'
import Spinner from '../../components/Spinner'
import Input from './Input'
import Checkbox from './Checkbox'

const Login = ({ captchaURL, login }) => {
    useEffect(() => {
        document.title = 'Login'
    }, [])

    const handleSubmit = (values, actions) => {
        login(values.email, values.password, values.rememberMe, values.captcha)
        actions.resetForm()
    }

    return (
        <div className={ componentWrapper.default + 'mx-auto max-w-[450px] p-5' }>
            <h1 className='mb-6 text-center text-2xl'>Login</h1>

            <Formik
                initialValues={ {
                    email: '',
                    password: '',
                    rememberMe: false,
                    captcha: ''
                } }
                validationSchema={ LoginSchema }
                onSubmit={ handleSubmit }
            >
                { ({ isSubmitting, isValid }) => (
                    <Form className='flex flex-col gap-3'>
                        <Input
                            label='Email'
                            type='email'
                            name='email'
                            id='email'
                            placeholder='john@email.com'
                            required
                        />

                        <Input
                            label='Password'
                            type='password'
                            name='password'
                            id='password'
                            placeholder='••••••••••••••••'
                            required
                        />

                        <Checkbox
                            label='Remember me'
                            type='checkbox'
                            name='rememberMe'
                            id='rememberMe'
                        />

                        { captchaURL && (
                            <Input
                                label={ <img
                                    src={ captchaURL }
                                    alt=''
                                    className={
                                        imageStyles.size.full +
                                        imageStyles.objectFit.cover +
                                        ' sm:w-[50%]'
                                    }
                                /> }
                                type='text'
                                name='captcha'
                                id='captcha'
                                placeholder='Type the characters you see in the picture'
                                required
                            />
                        ) }

                        <button
                            type='submit'
                            disabled={ !isValid || isSubmitting }
                            className={
                                button.default +
                                button.disabled +
                                'mt-5 flex p-3 w-full items-center justify-center text-center font-semibold'
                            }
                        >
                            { isSubmitting ? <Spinner size='md' /> : 'Log in' }
                        </button>
                    </Form>
                ) }
            </Formik>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        captchaURL: state.login.captchaURL
    }
}

export default connect(mapStateToProps, { login })(Login)
