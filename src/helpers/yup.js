import * as Yup from 'yup'
import YupPassword from 'yup-password'

YupPassword(Yup)

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .required('This field is required')
        .email('Invalid email'),
    password: Yup.string()
        .required('This field is required')
        .min(
            8,
            'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special character'
        )
        .minLowercase(1, 'Password must contain at least 1 lower case letter')
        .minUppercase(1, 'Password must contain at least 1 upper case letter')
        .minNumbers(1, 'Password must contain at least 1 number')
        .minSymbols(1, 'Password must contain at least 1 special character')
})

export const NewPostSchema = Yup.object().shape({
    newPostText: Yup.string().required('This field is required')
})

export const NewMessageSchema = Yup.object().shape({
    newMessageText: Yup.string().required()
})

export const NewStatusSchema = Yup.object().shape({
    newStatusText: Yup.string().max(
        150,
        'Status must contain 150 or less characters'
    )
})

const dateRegExp = /^(\d{1,2}).(\d{1,2}).(\d{4})$/

export const EditProfileSchema = Yup.object().shape({
    fullName: Yup.string().required('Required'),
    status: Yup.string().max(150, 'Status must contain 150 or less characters'),
    aboutMe: Yup.string().max(
        150,
        'Status must contain 150 or less characters'
    ),
    location: Yup.string().max(
        150,
        'Location must contain 150 or less characters'
    ),
    birthday: Yup.string().matches(dateRegExp, 'Invalid date'),
    education: Yup.string().max(
        150,
        'Education must contain 150 or less characters'
    ),
    lookingForAJobDescription: Yup.string().max(
        150,
        'Professional skills must contain 150 or less characters'
    ),
    contacts: Yup.object({
        github: Yup.string().url('Invalid URL'),
        vk: Yup.string().url('Invalid URL'),
        facebook: Yup.string().url('Invalid URL'),
        instagram: Yup.string().url('Invalid URL'),
        twitter: Yup.string().url('Invalid URL'),
        youtube: Yup.string().url('Invalid URL'),
        website: Yup.string().url('Invalid URL'),
        mainLink: Yup.string().url('Invalid URL')
    })
})
