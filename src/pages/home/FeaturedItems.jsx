import classNames from 'classnames';
import styles from 'assets/styles/pages/home/featuredItems.module.scss';
import SectionTitle from 'partials/SectionTitle';
import FlipCard from 'partials/FlipCard';
import { getDataFromJSONserver } from 'utils/fetching/getData';
import { useEffect, useState } from 'react';

const FeaturedItems = () => {
  const [cards, setCards] = useState([]);

  const loadResult = async () => {
    const result = await getDataFromJSONserver('cards');
    setCards(result.filter((card, i) => i < 3));
  };

  useEffect(() => {
    loadResult();
  }, []);

  return (
    <section className={classNames(styles.featuredItems)}>
      <SectionTitle title="Our" highlightedText="blog's" />
      <div className={classNames(styles.cardsWrapper)}>
        {cards.map((card) => {
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
