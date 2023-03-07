import { useField } from 'formik';

const Input = ({label, id, ...props}) => {
    const [field] = useField(props);

    return (
        <div className="flex items-center mb-4">
            <label htmlFor={id} className="block mr-2 text-xl cursor-pointer">{label}</label>
            <input id={id} {...field} {...props} />
        </div>
    )
}

export default Input;
