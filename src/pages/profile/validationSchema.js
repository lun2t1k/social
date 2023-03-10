import * as Yup from 'yup'

export const NewPostSchema = Yup.object().shape({
    newPostText: Yup.string().required('This field is required')
})
