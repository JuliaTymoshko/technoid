import classNames from 'classnames';
import styles from 'assets/styles/partials/customButton.module.scss';

const CustomButton = ({ buttonText, onClickHandler }) => {
  return (
    <button
      className={classNames(styles.customButton)}
      onClick={onClickHandler}
    >
      {buttonText || 'Hello'}
    </button>
  );
};

export default CustomButton;
