import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  firstName: Yup.string()
    .min(2, 'Name is too short')
    .max(40, 'Name is too long')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid data')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Name is too short')
    .max(40, 'Name is too long')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid data')
    .required('Required'),
  bio: Yup.string()
    .min(10, 'Your message is too short')
    .max(300, 'Your message is too long')
    .required('Required'),
});
