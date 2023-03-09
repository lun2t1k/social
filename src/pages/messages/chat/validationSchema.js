import * as Yup from 'yup';

export const NewMessageSchema = Yup.object().shape({
    newMessageText: Yup.string().required()
});
