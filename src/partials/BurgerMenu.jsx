import classNames from 'classnames';
import styles from 'assets/styles/partials/burgerMenu.module.scss';
import navStyles from 'assets/styles/partials/header.module.scss';
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({ close }) => {
  return (
    <div className={classNames(styles.modal)}>
      <div className={classNames(styles.modalDialog)}>
        <div className={classNames(styles.modalContent)}>
          <div className={classNames(styles.modalHeader)}>
            <h3 className={classNames(styles.modalTitle)}>Menu</h3>
            <div
              className={classNames(styles.closeButton)}
              onClick={() => close()}
            >
              ×
            </div>
          </div>
          <div>
            <nav>
              <ul className={classNames(styles.modalBody)}>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? navStyles.active : navStyles.link
                    }
                    to="/"
                    onClick={() => close()}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => close()}
                    className={({ isActive }) =>
                      isActive ? navStyles.active : navStyles.link
                    }
                    to="Gallery"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => close()}
                    className={({ isActive }) =>
                      isActive ? navStyles.active : navStyles.link
                    }
                    to="Profile"
                  >
                    Profile
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
