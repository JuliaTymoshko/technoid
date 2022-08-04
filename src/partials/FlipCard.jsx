import classNames from 'classnames';
import { useState } from 'react';
import styles from 'assets/styles/partials/flipCard.module.scss';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardPopup from './CardPopup';

const FlipCard = ({ title, description, imageSRC }) => {
  const [display, setDisplay] = useState(false);

  const showPopup = () => {
    setDisplay(true);
  };

  return (
    <>
      <Card
        className={classNames(styles.flipCard)}
        sx={{ maxWidth: 345 }}
        onClick={showPopup}
      >
        <div className={classNames(styles.flipCardInner)}>
          <div className={classNames(styles.flipCardFront)}>
            <CardActionArea>
              <CardMedia
                onClick={showPopup}
                component="img"
                height="180"
                image={imageSRC}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h6"
                  className={classNames(
                    styles.hideExtraInTitle,
                    styles.flipCardTitle
                  )}
                >
                  {title}
                </Typography>
                <Typography
                  className={classNames(styles.hideExtraInDescription)}
                  variant="body2"
                  color="text.secondary"
                >
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="outlined" size="small" color="warning">
                Read More
              </Button>
            </CardActions>
          </div>
          <Typography className={classNames(styles.flipCardBack)}>
            <Typography
              className={classNames(styles.hideExtraDetailedDescription)}
              variant="body2"
            >
              {description}
            </Typography>
          </Typography>
        </div>
      </Card>
      {display ? (
        <CardPopup
          title={title}
          description={description}
          imageSRC={imageSRC}
          close={() => setDisplay(false)}
        />
      ) : null}
    </>
  );
};

export default FlipCard;
