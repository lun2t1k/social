import * as Yup from 'yup';

export const NewMessageSchema = Yup.object().shape({
    newPostText: Yup.string().required('This field is required')
});
