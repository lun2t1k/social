import { connect } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import moment from 'moment'
import { sendMessage } from '../../../../redux/ducks/messages'
import { NewMessageSchema } from '../../../../helpers/yup'
import { button, textarea } from '../../../../helpers/theme'
import Spinner from '../../../components/Spinner'
import SendIcon from '../../../components/icons/SendIcon'

const ChatInput = ({ sendMessage }) => {
    const onSubmit = (values, actions) => {
        let time = moment().format('hh:mm')
        sendMessage(values.newMessageText, time)
        actions.resetForm()
    }

    return (
        <Formik
            initialValues={ { newMessageText: '' } }
            validationSchema={ NewMessageSchema }
            onSubmit={ onSubmit }
        >
            { ({ isSubmitting, isValid }) => (
                <Form className='flex w-full items-end gap-2 p-2'>
                    <Field
                        name='newMessageText'
                        as='textarea'
                        placeholder='Message'
                        className={
                            textarea.default +
                            'h-0 max-h-[150px] min-h-[36px] rounded-tl-xl rounded-br-none py-2 px-3 text-xs'
                        }
                    />
                    <button
                        type='submit'
                        disabled={ !isValid || isSubmitting }
                        className={ button.size.md + button.default + button.disabled + 'rounded-full !p-2' }
                    >
                        { isSubmitting ? (
                            <Spinner size='md' />
                        ) : (
                            <SendIcon extraClasses='relative -right-[1px]' />
                        ) }
                    </button>
                </Form>
            ) }
        </Formik>
    )
}

export default connect(null, { sendMessage })(ChatInput)
