import styles from 'assets/styles/partials/footer.module.scss';
import classNames from 'classnames';
import NavigationLink from './NavigationLink';

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
          <input type="text" className={classNames(styles.footerInput)} />
          <div>Get news subscription!</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
