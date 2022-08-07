import classNames from 'classnames';
import styles from 'assets/styles/partials/customButton.module.scss';

const CustomButton = ({ buttonText, onClickHandler, type }) => {
  return (
    <button
      type={type || 'text'}
      className={classNames(styles.customButton)}
      onClick={onClickHandler}
    >
      {buttonText || 'Button :)'}
    </button>
  );
};

export default CustomButton;
