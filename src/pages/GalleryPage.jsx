import classNames from 'classnames';
import styles from 'assets/styles/pages/gallery/gallery.module.scss';
import { useEffect, useState } from 'react';

// Components
import SectionTitle from 'partials/SectionTitle';
import FlipCard from 'partials/FlipCard';
import ResultNotFound from './gallery/ResultNotFound';
import SkeletonCardLoader from './gallery/SkeletonCardLoader';

// Data & functions
import cards from 'utils/jsons/cards.json';
import { filterCards } from 'utils/functions/filterCards';

// MUI
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import useMediaQuery from '@mui/material/useMediaQuery';

const Gallery = () => {
  const [cardsToMap, setCardsToMap] = useState(cards);
  const [loading, setLoading] = useState(true);

  // States for filtering fields
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDescription, setSearchDescription] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [titleOrder, setTitleOrder] = useState('');
  const [pubDateOrder, setPubDateOrder] = useState('asc');

  const matches = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);

    const newArr = filterCards(
      cards,
      searchTitle,
      searchDescription,
      searchCategory,
      titleOrder,
      pubDateOrder
    );
    setCardsToMap(newArr);
  }, [
    searchTitle,
    searchDescription,
    searchCategory,
    titleOrder,
    pubDateOrder,
  ]);

  const togglePubDateOrder = () => {
    setTitleOrder('');
    pubDateOrder === 'asc' ? setPubDateOrder('des') : setPubDateOrder('asc');
  };

  const toggleTitleOrder = () => {
    setPubDateOrder('');
    titleOrder === 'des' ? setTitleOrder('asc') : setTitleOrder('des');
  };

  const clearAllFilters = () => {
    setSearchTitle('');
    setSearchDescription('');
    setSearchCategory('');
    setTitleOrder('');
    setPubDateOrder('asc');
  };

  return (
    <div className={classNames(styles.gallery)}>
      <SectionTitle title="Our" highlightedText="gallery" />

      <div className={classNames(styles.gallerySearchBar)}>
        <div
          className={classNames(
            styles.fieldsWrapper,
            styles.upperFieldsWrapper
          )}
        >
          <TextField
            size={matches ? 'small' : 'medium'}
            color="warning"
            label="Search by title"
            name="titleSearch"
            id="titleSearch"
            value={searchTitle}
            onChange={(e) => {
              setSearchTitle(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <TextField
            size={matches ? 'small' : 'medium'}
            color="warning"
            label="Phrase match"
            name="inArticleSearch"
            id="inArticleSearch"
            value={searchDescription}
            onChange={(e) => {
              setSearchDescription(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </div>

        <div className={classNames(styles.fieldsWrapper)}>
          <FormControl
            sx={{ m: 1, minWidth: 140, margin: 0 }}
            size={matches ? 'small' : 'medium'}
            color="warning"
          >
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              MenuProps={{
                disableScrollLock: true,
              }}
              labelId="category"
              id="category"
              label="category"
              value={searchCategory}
              onChange={(e) => {
                setSearchCategory(e.target.value);
              }}
            >
              <MenuItem value={'Recruitment'}>Recruitment</MenuItem>
              <MenuItem value={'Business'}>Business</MenuItem>
              <MenuItem value={'SEO'}>SEO</MenuItem>
            </Select>
          </FormControl>

          <IconButton onClick={togglePubDateOrder} edge="end">
            <DateRangeIcon />
          </IconButton>

          <IconButton onClick={toggleTitleOrder} edge="end">
            <SortByAlphaIcon />
          </IconButton>

          <IconButton onClick={clearAllFilters} edge="end">
            <FilterAltOffIcon />
          </IconButton>
        </div>
      </div>

      <div>
        {cardsToMap.length === 0 ? (
          <ResultNotFound />
        ) : (
          <div className={classNames(styles.galleryImages)}>
            {(loading
              ? Array.from(new Array(cardsToMap.length))
              : cardsToMap
            ).map((card, index) => (
              <div key={index}>
                {card ? (
                  <FlipCard
                    key={card.id}
                    imageSRC={card.url}
                    title={card.title}
                    description={card.description}
                  />
                ) : (
                  <SkeletonCardLoader />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
