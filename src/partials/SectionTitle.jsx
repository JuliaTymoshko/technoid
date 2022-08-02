import classNames from 'classnames';
import styles from 'assets/styles/partials/sectionTitle.module.scss';

const SectionTitle = ({ title, highlightedText }) => {
  return (
    <div className={classNames(styles.sectionTitle)}>
      <h2 className={classNames(styles.title)}>
        {title}
        <span className={classNames(styles.highlightedText)}>
          {highlightedText}
        </span>
      </h2>
      <div className={classNames(styles.underline)}></div>
    </div>
  );
};

export default SectionTitle;
