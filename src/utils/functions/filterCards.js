export const filterCards = (
  initArr,
  title,
  description,
  category,
  titleOrder,
  pubDateOrder
) => {
  let allCards = initArr;

  if (title !== '') {
    allCards = allCards.filter((card) =>
      card.title.toLowerCase().includes(title.toLowerCase().trim())
    );
  }

  if (description !== '') {
    allCards = allCards.filter((card) =>
      card.description.toLowerCase().includes(description.toLowerCase().trim())
    );
  }

  if (category !== '') {
    allCards = allCards.filter((card) => card.category === category);
  }

  if (titleOrder === 'asc') {
    allCards = [...allCards].sort((a, b) => (a.title > b.title ? -1 : 1));
  } else if (titleOrder === 'des') {
    allCards = [...allCards].sort((a, b) => (a.title > b.title ? 1 : -1));
  }

  if (pubDateOrder === 'asc') {
    allCards = [...allCards].sort((a, b) =>
      new Date(a.publicationDate) > new Date(b.publicationDate) ? -1 : 1
    );
  } else if (pubDateOrder === 'des') {
    allCards = [...allCards].sort((a, b) =>
      new Date(a.publicationDate) > new Date(b.publicationDate) ? 1 : -1
    );
  }

  return allCards;
};
