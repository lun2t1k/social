import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { addNewPost } from "../../redux/reducers/profile";
import { NewPostSchema } from "./validationSchema";

const NewPostContainer = (props) => {
    const onSubmit = (values, actions) => {
        props.addNewPost(values.newPostText);
        actions.resetForm();
    };

    return (
        <div className="add-post w-full overflow-hidden rounded-3xl bg-white">
            <div className="p-5">
                <h3 className="mb-3 text-2xl">What's new?</h3>

                <Formik
                    initialValues={{ newPostText: "" }}
                    validationSchema={NewPostSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, touched, isSubmitting, isValid }) => (
                        <Form>
                            <Field
                                name="newPostText"
                                as="textarea"
                                required
                                className={
                                    "max-h-[200px] min-h-[100px] w-full rounded-xl border-2 p-3 text-lg outline-none focus:border-violet-500 " +
                                    (touched.newPostText && errors.newPostText && "border-rose-600 focus:border-rose-600")
                                }
                            />
                            {errors.newPostText && touched.newPostText ? (
                                <div className="text-rose-600">
                                    {errors.newPostText}
                                </div>
                            ) : null}
                            <div className="text-right">
                                <button
                                    type="submit"
                                    disabled={!isValid || isSubmitting}
                                    className="active mt-3 h-[60px] w-[100px] rounded-xl bg-violet-500 p-3 text-center text-xl font-bold text-white transition-all ease-in hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-violet-500"
                                >
                                    {isSubmitting ? (
                                        <span className="inline-block h-9 w-9 animate-spin rounded-full border-2 border-transparent border-t-white" />
                                    ) : (
                                        "Post"
                                    )}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

const NewPost = connect(null, { addNewPost })(NewPostContainer);

export default NewPost;
