import classNames from 'classnames';
import styles from 'assets/styles/pages/profile/editProfile.module.scss';
import { useState } from 'react';
import { useAuth } from 'utils/hooks/useAuth';

// MUI
import { Button, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Login';
import FolderIcon from '@mui/icons-material/Folder';
import updImg from 'assets/images/updated.png';

// Formik & Validation
import { useFormik } from 'formik';
import { validationSchema } from 'utils/validation/validationEditProfile';

// Components
import CardPopup from 'partials/CardPopup';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const auth = useAuth();
  const [display, setDisplay] = useState(false);

  let navigate = useNavigate();

  const URL = 'http://localhost:8000/Users';

  const matches = useMediaQuery('(max-width: 480px)');
  const formik = useFormik({
    initialValues: {
      id: auth.user.id,
      firstName: auth.user.firstName,
      lastName: auth.user.lastName,
      email: auth.user.email,
      password: auth.user.password,
      bio: auth.user.bio || '',
      avatar: auth.user.avatar || '',
    },

    validationSchema: validationSchema,

    onSubmit: (values, { setValues }) => {
      const headers = new Headers();
      const token = localStorage.getItem('fakeToken');

      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', token);

      fetch(URL, {
        // method: 'PUT', - to use to update data with a real endpoint
        method: 'POST', // - POST method to get to JSON endpoint, since PUT method is not supported in JSON server
        mode: 'cors',
        headers,
        body: JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          bio: values.bio,
          avatar: values.avatar,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          setDisplay(true);

          if (response.ok) {
            setValues({
              firstName: response.data.firstName || '',
              lastName: response.data.lastName || '',
              email: response.data.email || '',
              password: response.data.password || '',
              bio: response.data.bio || '',
              avatar: response.data.avatar || '',
            });
          }
        });
    },
  });

  return (
    <section className={classNames(styles.editProfile)}>
      <form
        className={classNames(styles.editProfileWrapper)}
        onSubmit={formik.handleSubmit}
      >
        <div className={classNames(styles.reqFieldsWrapper)}>
          <TextField
            size={matches ? 'small' : 'medium'}
            className={classNames(styles.field)}
            label="First Name"
            color="warning"
            type="text"
            name="firstName"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName ? formik.errors.firstName : ''}
          />
          <TextField
            size={matches ? 'small' : 'medium'}
            className={classNames(styles.field)}
            label="Last Name"
            color="warning"
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName ? formik.errors.lastName : ''}
          />
          <TextField
            size={matches ? 'small' : 'medium'}
            className={classNames(styles.field)}
            label="Email"
            color="warning"
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email ? formik.errors.email : ''}
          />
          <TextField
            size={matches ? 'small' : 'medium'}
            className={classNames(styles.field)}
            label="Password"
            color="warning"
            type="password"
            name="waist"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>

        <Button
          aria-label="upload picture"
          color="warning"
          startIcon={<FolderIcon />}
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          Upload avatar
        </Button>

        <TextField
          size={matches ? 'small' : 'medium'}
          className={classNames(styles.field)}
          label="Bio"
          color="warning"
          type="text"
          name="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
          error={formik.touched.bio && Boolean(formik.errors.bio)}
          helperText={formik.touched.bio ? formik.errors.bio : ''}
          id="bio"
          multiline
          rows={5}
          fullWidth
        />

        <Button
          aria-label="Save"
          type="submit"
          color="warning"
          variant="outlined"
          size="large"
          endIcon={<HowToRegIcon />}
        >
          Save
        </Button>

        <Button
          aria-label="Save"
          type="submit"
          color="warning"
          variant="outlined"
          size="large"
          endIcon={<LogoutIcon />}
          onClick={() => {
            auth.signout(() => navigate('/'));
          }}
        >
          Log Out
        </Button>
      </form>
      <>
        {display && (
          <div>
            <CardPopup
              imageSRC={updImg}
              close={() => setDisplay(false)}
              title={'Succesfully updated'}
              buttonText="Got it"
            />
          </div>
        )}
      </>
    </section>
  );
};

export default EditProfile;
