import React from 'react';
import Container from '@material-ui/core/Container';
//import Box from '@material-ui/core/Box';
// import '../scss/parallax.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import image1 from '../images/cabin-over-lake.jpg';
import image2 from '../images/bird.jpg';
import image3 from '../images/mountains.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    flex: '1 1 300px',
    margin: 10,
  },
  media: {
    height: 140,
  },
  container: {
    padding: 20,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardsTitle: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default function MainContent() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography gutterBottom variant="h4" component="h2" className={classes.cardsTitle}>
        Discover the Outdoors
      </Typography>
      <Container className={classes.cardContainer}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={ image1 }
              title="Cabin over the Lake"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Cabin over the Lake
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Cupidatat sed in labore sunt duis non ut est ad deserunt sunt dolore mollit et ullamco excepteur nisi consequat dolor eiusmod eu duis quis minim excepteur sed laborum reprehenderit exercitation elit commodo in consequat.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={ image2 }
              title="Colorful Blue Bird"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Birds
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Cupidatat sed in labore sunt duis non ut est ad deserunt sunt dolore mollit et ullamco excepteur nisi consequat dolor eiusmod eu duis quis minim excepteur sed laborum reprehenderit exercitation elit commodo in consequat.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={ image3 }
              title="Picturesque Mountains"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Picturesque Mountains
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Cupidatat sed in labore sunt duis non ut est ad deserunt sunt dolore mollit et ullamco excepteur nisi consequat dolor eiusmod eu duis quis minim excepteur sed laborum reprehenderit exercitation elit commodo in consequat.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Container>
  );
}

/**
    <div class="parallax">
      <div id="p-group1" class="parallax__group">
        <div class="parallax__layer parallax__layer--back">

        </div>
        <div class="parallax__layer parallax__layer--base">
          <Container maxWidth="sm">

          </Container>
        </div>
      </div>

      <div id="p-group2" class="parallax__group">
        <div class="parallax__layer parallax__layer--back">

        </div>
        <div class="parallax__layer parallax__layer--base">
          FRONT
        </div>
      </div>

      <div id="p-group3" class="parallax__group">
        <div class="parallax__layer parallax__layer--back">

        </div>
        <div class="parallax__layer parallax__layer--base">
          FRONT
        </div>
      </div>
    </div>
  )
}*/
