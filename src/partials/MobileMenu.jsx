import classNames from 'classnames';
import styles from 'assets/styles/partials/mobileMenu.module.scss';
import NavigationLink from './NavigationLink';

const MobileMenu = ({ close }) => {
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
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
