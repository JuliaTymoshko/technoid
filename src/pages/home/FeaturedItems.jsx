import classNames from 'classnames';
import styles from 'assets/styles/pages/home/featuredItems.module.scss';
import SectionTitle from 'partials/SectionTitle';
import FlipCard from 'partials/FlipCard';
import cards from 'utils/jsons/cards.json';

const FeaturedItems = () => {
  return (
    <section className={classNames(styles.featuredItems)}>
      <SectionTitle title="Our" highlightedText="blog's" />
      <div className={classNames(styles.cardsWrapper)}>
        {cards
          .filter((item, i) => i < 3)
          .map((card) => {
            return (
              <FlipCard
                key={card.id}
                imageSRC={card.url}
                title={card.title}
                description={card.description}
              />
            );
          })}
      </div>
    </section>
  );
};

export default FeaturedItems;
