import * as Yup from 'yup';
import 'yup-phone';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Name is too short')
    .max(40, 'Name is too long')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid data')
    .required('Required'),
  //
  email: Yup.string().email('Invalid email').required('Required'),
  //
  phone: Yup.string().phone('Phone number is not valid').required('Required'),
  //
  message: Yup.string()
    .min(2, 'Your message is too short')
    .max(300, 'Your message is too long')
    .required('Required'),
});
