import styles from 'assets/styles/partials/navigationLink.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ navigateToValue, navigateName, close }) => {
  return (
    <NavLink
      onClick={
        (() => {
          window.scrollTo(0, 0);
        },
        close)
      }
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
      to={navigateToValue}
    >
      {navigateName}
    </NavLink>
  );
};

export default NavigationLink;
