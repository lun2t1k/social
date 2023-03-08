import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import { sendNewMessage } from "../../../redux/reducers/messages";
import { NewMessageSchema } from "./validationSchema";

const ChatInputContainer = (props) => {
    const onSubmit = (values, actions) => {
        props.sendNewMessage(values.newMessageText);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={{ newMessageText: "" }}
            validationSchema={NewMessageSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting, isValid }) => (
                <Form className="flex w-full items-end gap-2 p-2">
                    <Field
                        name="newMessageText"
                        placeholder="Message"
                        as="textarea"
                        required
                        className="max-h-[150px] min-h-[36px] flex-auto rounded-2xl rounded-br-none border-2 p-2 text-xs outline-none focus:border-violet-500 md:py-2 md:px-3"
                    />
                    <button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        className="h-fit rounded-full bg-violet-500 p-2 text-white transition-all ease-in hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-violet-500"
                    >
                        {isSubmitting ? (
                            <span className="inline-block h-9 w-9 animate-spin rounded-full border-2 border-transparent border-t-white" />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="relative -right-[1px] h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                            </svg>
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

const ChatInput = connect(null, { sendNewMessage })(ChatInputContainer);

export default ChatInput;
