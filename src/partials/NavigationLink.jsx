import styles from 'assets/styles/partials/navigationLink.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ navigateToValue, navigateName, close }) => {
  const closeAndScrollToTop = () => {
    window.scrollTo(0, 0);

    if (close) {
      close();
    }
  };

  return (
    <NavLink
      onClick={() => {
        closeAndScrollToTop();
      }}
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
      to={navigateToValue}
    >
      {navigateName}
    </NavLink>
  );
};

export default NavigationLink;
