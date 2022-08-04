import classNames from 'classnames';
import styles from 'assets/styles/partials/cardPopup.module.scss';

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
              <button
                className={classNames(styles.closeButton)}
                onClick={() => close()}
              >
                x
              </button>
            </div>
            <div
              className={classNames(styles.popupBody)}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <p>{description}</p>
              <button
                className={classNames(styles.closeButton)}
                onClick={() => close()}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPopup;
