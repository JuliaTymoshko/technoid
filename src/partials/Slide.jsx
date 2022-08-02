import classNames from 'classnames';
import styles from 'assets/styles/pages/home/slide.module.scss';

const Slide = ({ title, description, btnText, url }) => {
  return (
    <div className={classNames(styles.slide)}>
      <img
        src={url}
        alt={description}
        className={classNames(styles.slideImage)}
      />
      <h3 className={classNames(styles.slideTitle)}>{title}</h3>
      <p className={classNames(styles.slideDescription)}>{description}</p>
      <button className={classNames(styles.slideButton)}>{btnText}</button>
    </div>
  );
};

export default Slide;
