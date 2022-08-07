import classNames from 'classnames';
import styles from 'assets/styles/partials/getInTouch.module.scss';

// Partials & Utils
import SectionTitle from 'partials/SectionTitle';

import { useState } from 'react';

// MUI
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// formik & validation
import { useFormik } from 'formik';
import { validationSchema } from 'utils/validation/validationGetInTouch';
import CardPopup from 'partials/CardPopup';

const GetInTouch = () => {
  const [errMessage, setErrMessage] = useState(' ');
  const [display, setDisplay] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },

    validationSchema: validationSchema,

    onSubmit: (values) => {
      setDisplay(true);
    },
  });

  return (
    <section className={classNames(styles.getInTouch)}>
      <SectionTitle title="Get in " highlightedText="touch" />
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className={classNames(styles.formWrapper)}
        >
          <TextField
            className={classNames(styles.field)}
            color="warning"
            label="First Name"
            name="firstName"
            id="firstName"
            required
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName ? formik.errors.firstName : ''}
          />
          <TextField
            className={classNames(styles.field)}
            color="warning"
            label="Last Name"
            name="lastName"
            id="lastName"
            required
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName ? formik.errors.firstName : ''}
          />

          <div className={classNames(styles.unreqFieldsWrapper)}>
            <TextField
              className={classNames(styles.field)}
              fullWidth
              label="Email"
              name="email"
              id="email"
              color="warning"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email ? formik.errors.email : ''}
            />

            <TextField
              className={classNames(styles.field)}
              fullWidth
              label="Phone"
              name="phone"
              id="phone"
              color="warning"
              required
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone ? formik.errors.phone : ''}
            />
          </div>

          <TextField
            className={classNames(styles.field)}
            label="Message"
            name="message"
            id="message"
            color="warning"
            required
            value={formik.values.message}
            onChange={formik.handleChange}
            helperText={formik.touched.message ? formik.errors.message : ''}
          />

          <Button
            type="submit"
            color="warning"
            variant="outlined"
            size="large"
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </form>
        <>
          {display && (
            <div>
              <CardPopup close={() => setDisplay(false)} title={errMessage} />
            </div>
          )}
        </>
      </div>
    </section>
  );
};

export default GetInTouch;
