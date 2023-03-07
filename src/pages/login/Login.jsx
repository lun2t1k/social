import { Formik, Form } from "formik";
import { LoginSchema } from "./validationSchema";
import Input from "./Input";
import Checkbox from "./Checkbox";

const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
};

const Login = () => {
    return (
        <div className="max-w-[600px] mx-auto overflow-hidden rounded-3xl bg-white p-5">
            <h1 className="mb-6 text-4xl text-center">Login</h1>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false,
                }}
                validationSchema={LoginSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, isValid }) => (
                    <Form>
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="john@email.com"
                            required
                        />

                        <Input
                            label="Password"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••••••••••"
                            required
                        />

                        <Checkbox
                            label="Remember me"
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMe"
                        />

                        <button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            className="active h-[60px] w-full rounded-xl bg-violet-500 p-3 text-center text-xl font-bold text-white transition-all ease-in hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-violet-500"
                        >
                            {isSubmitting ? (
                                <span className="inline-block h-9 w-9 animate-spin rounded-full border-2 border-transparent border-t-white" />
                            ) : (
                                'Log in'
                            )}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
