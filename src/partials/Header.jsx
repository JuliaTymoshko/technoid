import classNames from 'classnames';
import { useState } from 'react';
import styles from 'assets/styles/partials/header.module.scss';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import avatar from 'assets/images/avatar.jpg';
import MobileMenu from './MobileMenu';
import NavigationLink from './NavigationLink';

const Header = () => {
  const [display, setDisplay] = useState(false);

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
            <li>
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
            <div>
              {/* <AccountCircleIcon className={classNames(styles.accuntIcon)} /> */}
              <img
                src={avatar}
                alt="avatar"
                className={classNames(styles.accuntIconWrap)}
              />
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
