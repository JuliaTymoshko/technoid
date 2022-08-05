import classNames from 'classnames';
import styles from 'assets/styles/partials/cardPopup.module.scss';
import CustomButton from './CustomButton';

const CardPopup = ({ close, title, imageSRC, description }) => {
  return (
    <>
      <div className={classNames(styles.popup)}>
        <div className={classNames(styles.popupDialog)}>
          <div className={classNames(styles.popupContent)}>
            <img
              className={classNames(styles.popupImage)}
              src={imageSRC}
              alt={title}
            />
            <div className={classNames(styles.popupHeader)}>
              <h3>{title}</h3>
              <CustomButton buttonText="x" onClickHandler={() => close()} />
            </div>
            <div
              className={classNames(styles.popupBody)}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <p>{description}</p>
              <CustomButton
                buttonText="Nice article, thanks!"
                onClickHandler={() => close()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPopup;
