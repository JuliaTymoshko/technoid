import styles from 'assets/styles/partials/footer.module.scss';
import classNames from 'classnames';

const Footer = () => {
  return (
    <footer className={classNames(styles.footer)}>
      <div className={classNames(styles.footerBlock)}>
        <h4 className={classNames(styles.footerTitle)}>Address</h4>

        <div className={classNames(styles.footerSubBlock)}>
          <span>Office: Kyiv, Ukraine</span>
          <span>Mo-Fr 08:00 - 20:00</span>
          <span>Orrs Ave 36, Massachusetts, 02601</span>
        </div>
      </div>
      <div className={classNames(styles.footerBlock)}>
        <h4 className={classNames(styles.footerTitle)}>Menu</h4>

        <div className={classNames(styles.footerSubBlock)}>
          <span>Home</span>
          <span>Gallery</span>
          <span>Profile</span>
        </div>
      </div>
      <div className={classNames(styles.footerBlock)}>
        <h4 className={classNames(styles.footerTitle)}>Social media</h4>
        <div className={classNames(styles.footerSubBlock)}>
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>Facebook</span>
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
