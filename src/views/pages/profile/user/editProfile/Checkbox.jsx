import { useField } from 'formik'

export default function Checkbox({ label, id, ...props }) {
    const [ field ] = useField(props)

    return (
        <label
            htmlFor={ id }
            className='flex cursor-pointer select-none items-center gap-2 text-zinc-500'
        >
            { label }
            <input id={ id } { ...field } { ...props } className='peer hidden' />
            <div className='flex h-5 w-5 items-center justify-center rounded-lg border-2 border-violet-400 text-white peer-checked:bg-violet-400 dark:text-zinc-100 peer-checked:[&>svg]:block'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={ 2 }
                    stroke='currentColor'
                    className='hidden h-6 w-6'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 12.75l6 6 9-13.5'
                    />
                </svg>
            </div>
        </label>
    )
}
