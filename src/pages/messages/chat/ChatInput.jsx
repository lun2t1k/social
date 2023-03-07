import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { sendNewMessage } from "../../../redux/reducers/messages";
import { NewMessageSchema } from "./validationSchema";

const ChatInputContainer = (props) => {
    const onSubmit = (values, actions) => {
        props.sendNewMessage(values.newMessageText);
        // actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ newMessageText: "" }}
            validationSchema={NewMessageSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting, isValid }) => (
                <Form className="flex w-full items-end p-5">
                    <Field
                        name="newMessageText"
                        placeholder="Message"
                        required
                        className="mr-3 flex-auto rounded-xl border-2 p-3 outline-none focus:border-violet-500"
                    />
                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="h-fit rounded-xl bg-violet-500 px-6 py-3 text-xl text-white transition-all ease-in hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-violet-500"
                    >
                        {isSubmitting ? (
                            <span className="inline-block h-9 w-9 animate-spin rounded-full border-2 border-transparent border-t-white" />
                        ) : (
                            "Send"
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

const ChatInput = connect(null, { sendNewMessage })(ChatInputContainer);

export default ChatInput;
