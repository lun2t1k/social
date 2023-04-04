import {useState} from 'react'
import {Formik, Form, Field} from 'formik'
import {NewStatusSchema} from '../../../../helpers/yup'
import {button, input, errorStyles} from '../../../../helpers/theme'
import EditIcon from '../../../components/icons/EditIcon'

export default function UserStatus({isOwner, status, updateStatus}) {
    const [editMode, setEditMode] = useState(false)

    const handleSubmit = (values, actions) => {
        updateStatus(values.newStatusText)
        actions.resetForm()
        setEditMode(false)
    }

    return (
        <>
            {editMode ? (
                <Formik
                    initialValues={{newStatusText: status}}
                    validationSchema={NewStatusSchema}
                    onSubmit={handleSubmit}
                >
                    {({touched, errors, isSubmitting, isValid}) => (
                        <Form className='mx-auto mb-4 flex max-w-[70%] flex-col gap-3 xs:flex-row md:mx-0 md:max-w-[100%] lg:max-w-[60%]'>
                            <div className='flex flex-auto flex-col gap-1'>
                                <Field
                                    name='newStatusText'
                                    className={
                                        input.default +
                                        input.size.md +
                                        (touched.newStatusText &&
                                        errors.newStatusText
                                            ? input.error
                                            : '')
                                    }
                                    autoFocus
                                />
                                {touched.newStatusText &&
                                    errors.newStatusText && (
                                        <div className={errorStyles.color}>
                                            {errors.newStatusText}
                                        </div>
                                    )}
                            </div>
                            <button
                                type='submit'
                                disabled={!isValid || isSubmitting}
                                className={
                                    button.default +
                                    button.disabled +
                                    button.size.sm +
                                    'border border-transparent'
                                }
                            >
                                Save
                            </button>
                        </Form>
                    )}
                </Formik>
            ) : (
                <>
                    {isOwner ? (
                        <h3
                            onClick={() => setEditMode(true)}
                            className='break-word group mb-4 flex cursor-pointer select-none items-center justify-center gap-2 text-center md:justify-start md:text-left lg:max-w-[60%]'
                        >
                            <span>{status ? status : 'Set your status'}</span>
                            <EditIcon classes='hidden h-4 w-4 group-hover:inline-block flex-[0_0_auto]' />
                        </h3>
                    ) : (
                        <h3 className='break-word group mb-4 flex justify-center text-center md:justify-start md:text-left lg:max-w-[60%]'>
                            <span>{status ? status : ''}</span>
                        </h3>
                    )}
                </>
            )}
        </>
    )
}
