import classNames from 'classnames';
import styles from 'assets/styles/partials/footer.module.scss';
import { Formik } from 'formik';

import NavigationLink from './NavigationLink';
import CustomButton from './CustomButton';

const Footer = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.footerBlock)}>
        <h4 className={classNames(styles.footerTitle)}>Address</h4>

        <div className={classNames(styles.footerSubBlock)}>
          <span>Office: Boston, USA</span>
          <span>Mo-Fr 08:00 - 20:00</span>
          <a
            href="https://goo.gl/maps/SKyaf83R9uM7chdV8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>465 Huntington AveBoston</span>
          </a>
        </div>
      </div>
      <div className={classNames(styles.footerBlock)}>
        <h4 className={classNames(styles.footerTitle)}>Menu</h4>

        <div className={classNames(styles.footerSubBlock)}>
          <NavigationLink navigateToValue="/" navigateName="Home" />
          <NavigationLink navigateToValue="gallery" navigateName="Gallery" />
          <NavigationLink navigateToValue="profile" navigateName="Profile" />
        </div>
      </div>
      <div className={classNames(styles.footerBlock)}>
        <h4 className={classNames(styles.footerTitle)}>Social media</h4>
        <div className={classNames(styles.footerSubBlock)}>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Twitter</span>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      <div className={classNames(styles.footerBlock)}>
        <h4 className={classNames(styles.footerTitle)}>Newsletter form</h4>
        <div className={classNames(styles.footerSubBlock)}>
          <Formik
            initialValues={{ email: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={async (values) => {
              alert(`You're subscribed for news with ${values.email} email `);
            }}
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <form
                onSubmit={handleSubmit}
                className={classNames(styles.footerSubscribe)}
              >
                <div>Get news subscription!</div>
                <input
                  type="email"
                  name="email"
                  required
                  className={classNames(styles.footerInput)}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <CustomButton buttonText="Subscribe" type="submit" />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
