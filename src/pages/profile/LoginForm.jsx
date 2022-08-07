import { useState } from 'react';
import classNames from 'classnames';
import styles from 'assets/styles/pages/profile/loginForm.module.scss';
import { Button, TextField, Divider } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from 'utils/hooks/useAuth';

import { useFormik } from 'formik';
import { validationSchema } from 'utils/validation/validationLogin';
import { getDataFromJSONserver } from 'utils/fetching/getData';

const LoginForm = () => {
  const auth = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const initialValues = { email: '', password: '' };
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues,
    onSubmit: (values) => {},
  });

  const loadUser = async () => {
    setPasswordError('');
    setEmailError('');

    const users = await getDataFromJSONserver('users');

    let user = users.find((user) => user.email === email);

    if (user === undefined || user === null || !user) {
      setEmailError('No uswer with such email');
      return;
    } else if (user.password !== password) {
      setPasswordError('Wrong password');
      return;
    } else {
      auth.signin(user, () => window.scrollTo(0, 0));
      localStorage.setItem('fakeToken', user.id);
    }
  };

  return (
    <div className={classNames(styles.loginWrapper)}>
      <Divider className={classNames(styles.divider)}>Login</Divider>
      <form onSubmit={formik.handleSubmit}>
        <div className={classNames(styles.fieldsWrapper)}>
          <TextField
            className={classNames(styles.field)}
            label="Email"
            name="email"
            id="email"
            color="warning"
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.password ? emailError : ' '}
          />

          <TextField
            className={classNames(styles.field)}
            label="Password"
            color="warning"
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password ? passwordError : ' '}
          />

          <Button
            className={classNames(styles.button)}
            type="submit"
            fullWidth
            color="warning"
            variant="outlined"
            size="large"
            endIcon={<LoginIcon />}
            onClick={loadUser}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
