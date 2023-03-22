import { useField } from 'formik'
import { input } from '../../../helpers/theme'

const Input = ({ label, id, ...props }) => {
    const [field, { touched, error }] = useField(props)

    return (
        <div className='mb-4'>
            <label htmlFor={ id } className='block cursor-pointer text-xl'>
                { label }
            </label>
            <input
                id={ id }
                { ...field }
                { ...props }
                className={
                    input.default +
                    input.size.lg +
                    (touched && error && input.error) +
                    'mb-1 text-lg'
                }
            />
            { touched && error && <div className='text-rose-600'>{ error }</div> }
        </div>
    )
}

export default Input
