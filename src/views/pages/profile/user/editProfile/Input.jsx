import {useField} from 'formik'
import {input, errorStyles} from '../../../../../helpers/theme'

export default function Input({label, id, ...props}) {
    const [field, {touched, error}] = useField(props)

    return (
        <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2'>
            <label
                htmlFor={id}
                className='flex-[1_0_auto] cursor-pointer text-zinc-500'
            >
                {label}
            </label>
            <div className='flex w-full flex-col'>
                <input
                    id={id}
                    {...field}
                    {...props}
                    className={
                        input.default +
                        input.size.md +
                        (touched && error && input.error)
                    }
                />
                {touched && error && (
                    <div className={errorStyles.color}>{error}</div>
                )}
            </div>
        </div>
    )
}
