import { useState } from 'react';
import classNames from 'classnames';
import styles from 'assets/styles/pages/gallery/gallery.module.scss';

import SectionTitle from 'partials/SectionTitle';
import FlipCard from 'partials/FlipCard';

import useMediaQuery from '@mui/material/useMediaQuery';
import cards from 'utils/jsons/cards.json';

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

const Gallery = () => {
  const [arrayToMap, setArrayToMap] = useState(cards);
  const [titleValue, setTitleValue] = useState('');
  const [inContentValue, setInContentValue] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [order, setOrder] = useState('');
  const [timeOrder, setTimeOrder] = useState('');
  const matches = useMediaQuery('(max-width: 480px)');

  const filterByCategory = (inpValue) => {
    setSelectedItem(inpValue);

    if (titleValue !== '' || inContentValue !== '') {
      setArrayToMap(arrayToMap.filter((card) => card.category === inpValue));
    } else {
      setArrayToMap(cards.filter((card) => card.category === inpValue));
    }
  };

  const filterByTitle = (titleValue) => {
    setTitleValue(titleValue);

    if (selectedItem !== '' || inContentValue !== '') {
      setArrayToMap(
        arrayToMap.filter((card) =>
          card.title.toLowerCase().includes(titleValue.toLowerCase())
        )
      );
    } else {
      setArrayToMap(
        cards.filter((card) =>
          card.title.toLowerCase().includes(titleValue.toLowerCase())
        )
      );
    }
  };

  const filterByContent = (inContentValue) => {
    setInContentValue(inContentValue);
    if (selectedItem !== '' || titleValue !== '') {
      setArrayToMap(
        arrayToMap.filter((card) =>
          card.description.toLowerCase().includes(inContentValue.toLowerCase())
        )
      );
    } else {
      setArrayToMap(
        cards.filter((card) =>
          card.description.toLowerCase().includes(inContentValue.toLowerCase())
        )
      );
    }
  };

  const filterByPublicationDate = () => {
    setTimeOrder('asc');

    if (timeOrder === 'asc') {
      setArrayToMap(
        [...arrayToMap].sort((a, b) =>
          new Date(a.publicationDate) > new Date(b.publicationDate) ? -1 : 1
        )
      );
      setTimeOrder('des');
    } else {
      setArrayToMap(
        [...arrayToMap].sort((a, b) =>
          new Date(a.publicationDate) > new Date(b.publicationDate) ? 1 : -1
        )
      );
      setTimeOrder('asc');
    }
  };

  const sortAscAndDes = () => {
    setOrder('asc');

    if (order === 'asc') {
      setArrayToMap(
        [...arrayToMap].sort((a, b) => (a.title > b.title ? 1 : -1))
      );
      setOrder('des');
    } else {
      setArrayToMap(
        [...arrayToMap].sort((a, b) => (a.title > b.title ? -1 : 1))
      );
      setOrder('asc');
    }
  };

  const clearAllFilters = () => {
    setArrayToMap(cards);
    setTitleValue('');
    setInContentValue('');
    setSelectedItem('');
    setOrder('');
    setTimeOrder('');
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
            value={titleValue}
            onChange={(e) => filterByTitle(e.target.value)}
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
            value={inContentValue}
            onChange={(e) => filterByContent(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => console.log('helow from inArticleSearch')}
                  edge="end"
                >
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
              labelId="category"
              id="category"
              label="category"
              value={selectedItem}
              onChange={(e) => filterByCategory(e.target.value)}
            >
              <MenuItem value={'Recruitment'}>Recruitment</MenuItem>
              <MenuItem value={'Business'}>Business</MenuItem>
              <MenuItem value={'SEO'}>SEO</MenuItem>
            </Select>
          </FormControl>

          <IconButton edge="end" onClick={() => filterByPublicationDate()}>
            <DateRangeIcon />
          </IconButton>

          <IconButton onClick={() => sortAscAndDes()} edge="end">
            <SortByAlphaIcon />
          </IconButton>

          <IconButton onClick={() => clearAllFilters()} edge="end">
            <FilterAltOffIcon />
          </IconButton>
        </div>
      </div>

      <div className={classNames(styles.galleryImages)}>
        {/* {sortedCards && */}
        {arrayToMap.map((card, i) => {
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
    </div>
  );
};

export default Gallery;
