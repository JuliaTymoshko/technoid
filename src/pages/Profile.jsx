import classNames from 'classnames';
import styles from 'assets/styles/pages/profile/profile.module.scss';
import { useState } from 'react';
import { useAuth } from 'utils/hooks/useAuth';

// Components
import SectionTitle from 'partials/SectionTitle';
import EditProfile from './profile/EditProfile';
import LoginForm from './profile/LoginForm';

const Profile = () => {
  const auth = useAuth();

  const [display, setDisplay] = useState(false);

  return (
    <section className={classNames(styles.profile)}>
      <SectionTitle
        title={auth.user ? `${auth.user.firstName}'s` : 'Your'}
        highlightedText="profile"
      />

      <div>{auth.user ? <EditProfile /> : <LoginForm />}</div>
    </section>
  );
};

export default Profile;
