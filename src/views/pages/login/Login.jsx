import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Formik, Form } from 'formik'
import { LoginSchema } from '../../../helpers/yup'
import { componentWrapper, button } from '../../../helpers/theme'
import { login } from '../../../redux/ducks/login'
import Spinner from '../../components/Spinner'
import Input from './Input'
import Checkbox from './Checkbox'

const Login = ({ login }) => {
    useEffect(() => {
        document.title = 'Login'
    }, [])

    const handleSubmit = (values, actions) => {
        login(values.email, values.password, values.rememberMe)
        actions.resetForm()
    }

    return (
        <div className={ componentWrapper.default + 'mx-auto max-w-[600px] p-5' }>
            <h1 className='mb-6 text-center text-4xl'>Login</h1>

            <Formik
                initialValues={ {
                    email: '',
                    password: '',
                    rememberMe: false
                } }
                validationSchema={ LoginSchema }
                onSubmit={ handleSubmit }
            >
                { ({ isSubmitting, isValid }) => (
                    <Form>
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

                        <button
                            type='submit'
                            disabled={ !isValid || isSubmitting }
                            className={
                                button.default +
                                button.disabled +
                                'mt-10 flex h-[60px] w-full items-center justify-center text-center text-xl font-bold'
                            }
                        >
                            { isSubmitting ? <Spinner size='lg' /> : 'Log in' }
                        </button>
                    </Form>
                ) }
            </Formik>
        </div>
    )
}

export default connect(null, { login })(Login)
