import classNames from 'classnames';
import styles from 'assets/styles/pages/bonus/bonus.module.scss';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const Bonus = () => {
  return (
    <section className="bonus">
      <div className={classNames(styles.wrapper)}>
        <AutoFixHighIcon className={classNames(styles.icon)} />
        Thank you for being logged in & reviewing my project! Wishing you best,
        Julia Tymoshko
      </div>
    </section>
  );
};

export default Bonus;
