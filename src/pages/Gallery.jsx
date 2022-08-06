import { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from 'assets/styles/pages/gallery/gallery.module.scss';

import SectionTitle from 'partials/SectionTitle';

import useMediaQuery from '@mui/material/useMediaQuery';
import FlipCard from 'partials/FlipCard';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

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
import cards from 'utils/jsons/cards.json';

const Gallery = () => {
  const [cardsToMap, setCardsToMap] = useState([]);

  const [searchTitle, setSearchTitle] = useState('');
  const [searchDescription, setSearchDescription] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [titleOrder, setTitleOrder] = useState('');
  const [pubDateOrder, setPubDateOrder] = useState('asc');

  const matches = useMediaQuery('(max-width: 480px)');

  function Media(props) {
    const { loading = false } = props;

    return (
      <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : cardsToMap).map(
          (item, index) => (
            <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
              {item ? (
                <img
                  style={{ width: 210, height: 118 }}
                  alt={item.title}
                  src={item.src}
                />
              ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
              )}

              {/* {item ? (
                <Box sx={{ pr: 2 }}>
                  <Typography gutterBottom variant="body2">
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {`${item.views} • ${item.createdAt}`}
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )} */}
            </Box>
          )
        )}
      </Grid>
    );
  }

  Media.propTypes = {
    loading: PropTypes.bool,
  };
  const handleChange = () => {
    let allCards = cards;

    if (searchTitle !== '') {
      allCards = allCards.filter((card) =>
        card.title.toLowerCase().includes(searchTitle.toLowerCase().trim())
      );
    }

    if (searchDescription !== '') {
      allCards = allCards.filter((card) =>
        card.description
          .toLowerCase()
          .includes(searchDescription.toLowerCase().trim())
      );
    }

    if (searchCategory !== '') {
      allCards = allCards.filter((card) => card.category === searchCategory);
    }

    if (titleOrder === 'asc') {
      allCards = [...allCards].sort((a, b) => (a.title > b.title ? 1 : -1));
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

  useEffect(() => {
    const newArr = handleChange();
    setCardsToMap(newArr);
  }, [
    searchTitle,
    searchDescription,
    searchCategory,
    titleOrder,
    pubDateOrder,
  ]);

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
            fullWidth
            className={classNames(styles.field)}
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
                <IconButton onClick={() => console.log('helow')} edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <TextField
            fullWidth
            className={classNames(styles.field)}
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
                <IconButton onClick={() => {}} edge="end">
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

          <IconButton
            edge="end"
            onClick={() => {
              console.log('am here calendar');
              setTitleOrder('');
              pubDateOrder === 'asc'
                ? setPubDateOrder('asc')
                : setPubDateOrder('des');
            }}
          >
            <DateRangeIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              console.log('am here SortByAlphaIcon');
              setPubDateOrder('');
              if (titleOrder === 'des') {
                setTitleOrder('asc');
              } else {
                setTitleOrder('des');
              }
            }}
            edge="end"
          >
            <SortByAlphaIcon />
          </IconButton>

          <IconButton onClick={() => clearAllFilters()} edge="end">
            <FilterAltOffIcon />
          </IconButton>
        </div>
      </div>
      <div className={classNames(styles.galleryImages)}>
        {/* {cardsToMap.map((card) => {
          return (
            <FlipCard
              key={card.id}
              imageSRC={card.url}
              title={card.title}
              description={card.description}
            />
          );
        })} */}
        <Box sx={{ overflow: 'hidden' }}>
          <Media loading />
          <Media />
        </Box>
      </div>
    </div>
  );
};

export default Gallery;
