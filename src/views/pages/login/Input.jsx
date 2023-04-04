import {useField} from 'formik'
import {input, errorStyles} from '../../../helpers/theme'

const Input = ({label, id, ...props}) => {
    const [field, {touched, error}] = useField(props)

    return (
        <label htmlFor={id} className='flex cursor-pointer flex-col gap-1'>
            {label}
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
        </label>
    )
}

export default Input
