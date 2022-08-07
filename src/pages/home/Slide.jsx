import classNames from 'classnames';
import styles from 'assets/styles/pages/home/slide.module.scss';
import CustomButton from '../../partials/CustomButton';

const Slide = ({ title, description, btnText, url, lazyClassForImage }) => {
  return (
    <div className={classNames(styles.slide)}>
      <img
        src={url}
        alt={description}
        className={classNames(styles.slideImage, lazyClassForImage)}
      />
      <div className={classNames(styles.slideContent)}>
        <h3 className={classNames(styles.slideTitle)}>{title}</h3>
        <p className={classNames(styles.slideDescription)}>{description}</p>
        <CustomButton buttonText={btnText} />
      </div>
    </div>
  );
};

export default Slide;
