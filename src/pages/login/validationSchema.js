import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

export const LoginSchema = Yup.object().shape({
    email: Yup.string().required('This field is required').email('Invalid email'),
    password: Yup
        .string()
        .required('This field is required')
        .min(8, 'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special character')
        .minLowercase(1, 'Password must contain at least 1 lower case letter')
        .minUppercase(1, 'Password must contain at least 1 upper case letter')
        .minNumbers(1, 'Password must contain at least 1 number')
        .minSymbols(1, 'Password must contain at least 1 special character')
});
