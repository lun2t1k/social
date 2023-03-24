import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { NewStatusSchema } from '../../../../helpers/yup'
import { button, input, errorStyles } from '../../../../helpers/theme'
import EditIcon from '../../../components/icons/EditIcon'

export default function UserStatus({ isOwner, status, updateStatus }) {
    const [editMode, setEditMode] = useState(false)

    const handleSubmit = (values, actions) => {
        updateStatus(values.newStatusText)
        actions.resetForm()
        setEditMode(false)
    }

    return (
        <>
            { editMode ? (
                <Formik
                    initialValues={ { newStatusText: status } }
                    validationSchema={ NewStatusSchema }
                    onSubmit={ handleSubmit }
                >
                    { ({ touched, errors, isSubmitting, isValid }) => {
                        return (
                            <Form className='flex flex-col gap-3 xs:flex-row'>
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
                                    { touched.newStatusText &&
                                        errors.newStatusText && (
                                            <div className={ errorStyles.color }>
                                                { errors.newStatusText }
                                            </div>
                                        ) }
                                </div>
                                <button
                                    type='submit'
                                    disabled={ !isValid || isSubmitting }
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
                        )
                    } }
                </Formik>
            ) : (
                <>
                    { isOwner ? (
                        <h3
                            onClick={ () => setEditMode(true) }
                            className='group mb-4 flex gap-2 cursor-pointer select-none items-center justify-center md:justify-start'
                        >
                            <span>{ status ? status : 'Set your status' }</span>
                            <EditIcon classes='hidden h-4 w-4 group-hover:inline-block' />
                        </h3>
                    ) : (
                        <h3 className='mb-4'>
                            { status ? status : '' }
                        </h3>
                    ) }
                </>
            ) }
        </>
    )
}
