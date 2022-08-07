import classNames from 'classnames';
import styles from 'assets/styles/pages/gallery/resultNotFound.module.scss';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ResultNotFound = () => {
  return (
    <div className="searchError">
      <div className={classNames(styles.wrapper)}>
        <ErrorOutlineIcon className={classNames(styles.icon)} />
        Result not found. Please check the spelling or try alternative queries.
      </div>
    </div>
  );
};

export default ResultNotFound;
