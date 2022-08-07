import classNames from 'classnames';
import { useState } from 'react';
import styles from 'assets/styles/partials/header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import Avatar from '@mui/material/Avatar';
import MobileMenu from './MobileMenu';
import NavigationLink from './NavigationLink';
import { useAuth } from 'utils/hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
  const [display, setDisplay] = useState(false);

  const auth = useAuth();

  const hideModal = () => {
    setDisplay(false);
  };

  return (
    <header>
      <div className={classNames(styles.headerWapper)}>
        <Logo
          className={classNames(styles.logo)}
          onClick={() => window.location.reload(false)}
        />
        <nav>
          <ul className={classNames(styles.navigation)}>
            <li onClick={hideModal}>
              <NavigationLink navigateToValue="/" navigateName="Home" />
            </li>
            <li>
              <NavigationLink
                navigateToValue="gallery"
                navigateName="Gallery"
              />
            </li>
            <li>
              <NavigationLink
                navigateToValue="profile"
                navigateName="Profile"
              />
            </li>
            <li>
              <NavigationLink navigateToValue="bonus" navigateName="Bonus" />
            </li>
            <div>
              <Link to="/profile">
                <Avatar
                  alt={auth.user ? auth.user.firstName : 'Guest avatar'}
                  src={auth.user ? auth.user.avatar : ''}
                />
              </Link>
            </div>
          </ul>
        </nav>
        <div
          className={classNames(styles.burger)}
          onClick={() => setDisplay(true)}
        >
          <span>|||</span>
        </div>
      </div>
      <div>{display ? <MobileMenu close={hideModal} /> : null}</div>
    </header>
  );
};

export default Header;
