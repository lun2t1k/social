import { useField } from "formik";

const Input = ({ label, id, ...props }) => {
    const [field, form] = useField(props);

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block cursor-pointer text-xl">
                {label}
            </label>
            <input
                id={id}
                {...field}
                {...props}
                className={
                    "mb-1 w-full border-2 rounded-xl py-2 px-3 text-lg outline-none transition-all ease-in focus:border-violet-400 " +
                    (form.touched && form.error && "border-rose-600 focus:border-rose-600")
                }
            />
            {form.touched && form.error && (
                <div className="text-rose-600">{form.error}</div>
            )}
        </div>
    );
};

export default Input;
