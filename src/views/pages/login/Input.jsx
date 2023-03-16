import { useField } from "formik"

const Input = ({ label, id, ...props }) => {
    const [field, {touched, error}] = useField(props)

    return (
        <div className="mb-4">
            <label htmlFor={ id } className="block cursor-pointer text-xl">
                { label }
            </label>
            <input
                id={ id }
                { ...field }
                { ...props }
                className={`mb-1 w-full border dark:border-zinc-700 rounded-xl py-2 px-3 text-lg outline-none bg-transparent transition-all ease-in focus:border-violet-400 
                    ${(touched && error) ? "border-rose-600 focus:border-rose-600 dark:border-rose-600 dark:focus:border-rose-600" : ''}
                `}
            />
            { touched && error && (
                <div className="text-rose-600">{ error }</div>
            ) }
        </div>
    )
}

export default Input
