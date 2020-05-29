import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
// import './scss/parallax.scss'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MainContent() {
  return (
    <Container>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="./images/luca-bravo-hFzIoD0F_i8-unsplash.jpg"
            title="Cabin over the Lake"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Cabin
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
