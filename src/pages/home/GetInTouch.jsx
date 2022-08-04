import classNames from 'classnames';
import styles from 'assets/styles/pages/home/sponsors.module.scss';

// Partials & Utils
import SectionTitle from 'partials/SectionTitle';

const GetInTouch = () => {
  return (
    <section className={classNames(styles.sponsors)}>
      <SectionTitle title="Get in " highlightedText="touch" />
    </section>
  );
};

export default GetInTouch;
