import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { NewStatusSchema } from '../../../helpers/yup'

export default function UserStatus(props) {
    const [editMode, setEditMode] = useState(false)

    const onSubmit = (values, actions) => {
        props.updateStatus(values.newStatusText)
        actions.resetForm()
        setEditMode(false)
    }

    return (
        <>
            { editMode ? (
                <Formik
                    initialValues={ { newStatusText: props.userStatus } }
                    validationSchema={ NewStatusSchema }
                    onSubmit={ onSubmit }
                >
                    { ({ touched, errors, isSubmitting, isValid }) => {
                        return (
                            <Form className="flex flex-col gap-3 xs:flex-row">
                                <div className="flex flex-auto gap-1 flex-col">
                                    <Field
                                        name="newStatusText"
                                        className={ `w-full rounded-xl border dark:border-zinc-700 bg-transparent py-1 px-2 focus:border-violet-400 dark:focus:border-violet-400 outline-none
                                            ${touched.newStatusText && errors.newStatusText && 'border-rose-600 dark:border-rose-600'}
                                        `}
                                        autoFocus
                                    />
                                    { touched.newStatusText && errors.newStatusText && (
                                        <div className="text-rose-600">{ errors.newStatusText }</div>
                                    ) }
                                </div>
                                <button
                                    type="submit"
                                    disabled={ !isValid || isSubmitting }
                                    className="h-fit rounded-xl border border-violet-400 hover:border-violet-500 bg-violet-400 py-1 px-2 text-center font-semibold text-white transition-all ease-in hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-violet-400"
                                >
                                    Save
                                </button>
                            </Form>
                        )
                    } }
                </Formik>
            ) : (
                <h3
                    onClick={ () => setEditMode(true) }
                    className="group mb-4 flex cursor-pointer select-none items-center justify-center md:justify-start"
                >
                    <span>
                        { props.userStatus
                            ? props.userStatus
                            : "Set your status" }
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={ 1.5 }
                        stroke="currentColor"
                        className="ml-2 hidden h-4 w-4 group-hover:inline-block"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>
                </h3>
            ) }
        </>
    )
}
