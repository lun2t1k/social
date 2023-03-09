import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { addNewPost } from "../../../redux/reducers/profile";
import { NewPostSchema } from "../validationSchema";
import UserDefaultAvatar from "../../../components/UserDefaultAvatar";

const NewPostContainer = (props) => {
    const onSubmit = (values, actions) => {
        props.addNewPost(values.newPostText);
        actions.resetForm();
    };

    return (
        <div className="add-post w-full overflow-hidden rounded-2xl bg-white dark:bg-zinc-900">
            <div className="p-5">
                <Formik
                    initialValues={{ newPostText: "" }}
                    validationSchema={NewPostSchema}
                    onSubmit={onSubmit}
                >
                    {({ dirty, isSubmitting, isValid }) => {
                        return (
                            <Form className="flex flex-col gap-3 xs:flex-row">
                                <div className="flex flex-auto gap-3">
                                    <UserDefaultAvatar />
                                    <Field
                                        name="newPostText"
                                        as="textarea"
                                        placeholder="What's new?"
                                        required
                                        className="min-h-[52px] max-h-[250px] w-full rounded-xl rounded-tl-none border dark:border-zinc-700 bg-transparent p-3 focus:border-violet-400 outline-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={!isValid || isSubmitting}
                                    className={
                                        "h-fit rounded-xl bg-violet-400 py-2 px-3 text-center font-semibold text-white transition-all ease-in hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-violet-400 " +
                                        (dirty ? "inline" : "hidden")
                                    }
                                >
                                    Post
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

const NewPost = connect(null, { addNewPost })(NewPostContainer);

export default NewPost;
