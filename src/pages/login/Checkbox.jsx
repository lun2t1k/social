import { useField } from "formik"

const Checkbox = ({ label, id, ...props }) => {
    const [field] = useField(props)

    return (
        <div className="mb-4">
            <label htmlFor={ id } className="flex items-center gap-2 cursor-pointer text-xl select-none">
                { label }

                <input id={ id } { ...field } { ...props } className="peer hidden" />
                <div className="flex h-6 w-6 items-center justify-center rounded-lg border-2 border-violet-400 peer-checked:bg-violet-400 peer-checked:[&>svg]:block">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={ 2 }
                        stroke="currentColor"
                        className="h-6 w-6 hidden"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>
                </div>
            </label>
        </div>
    )
}

export default Checkbox
