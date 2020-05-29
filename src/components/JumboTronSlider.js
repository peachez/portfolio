import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import firebird from '../images/firebird.jpg';
import engineBlue from '../images/engine-blue.jpg';





const useStyles = makeStyles((theme) => ({
  jumbotron: {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 72px - 16px)', // full height - header hight - body padding (see main.scss)
    background: `url(${ engineBlue })`,
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255,255,255, 1)',
    position: 'relative',
    maxWidth: '90%',
  },
  blurredBgCont: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    bottom: -20,
  },
  blurredBg: {
    background: `url(${ engineBlue })`,
    backgroundAttachment: 'fixed',
    filter: 'blur(5px)',
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  title: {
    fontSize: '3rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
    fontWeight: 900,
    fontFamily: "'Rock Salt', cursive",
    marginBottom: '1em',

    color: '#a90000',
    mixBlendMode: 'color-burn',
    textShadow: '0 0 1px #000',
  },
  mod: {
    textShadow: '25px 25px 3px rgba(20,20,200,1)',
    color: 'rgba(0,0,0,0)',
  },
  shop: {
    color: 'rgba(0,0,0,0)',
    textShadow: '0 45px 5px rgba(0,0,0,0.5)',
  },
  desc: {
    fontSize: '1.2rem',
    color: 'rgba(0, 0, 0, 0.8)',
    mixBlendMode: 'darken',
  },
  image1: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  actionsContainer: {
    justifyContent: 'flex-end',
  },
  moreLink: {
    backgroundColor: '#00264c',
    color: '#fff',
  }
}));

export default function JumboTronSlider() {
  const classes = useStyles();
  return (
    <section className={classes.jumbotron}>
      <Card className={classes.card} raised={true}>
        <CardContent>
          <div className={classes.blurredBgCont}>
            <div className={classes.blurredBg}></div>
          </div>
          <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
           <span className={classes.mod}>M</span>
           <span className={classes.mod}>o</span>
           <span className={classes.mod}>D</span>
           <span className={classes.shop}>Shop</span>
         </Typography>
          <Typography variant="body2" component="p" color="textSecondary" gutterBottom className={classes.desc}>
           Routine maintenance, schedules, enhancements to your ride, and much more! Whether your ride needs some routine maintenance, fancy new wheels, or a lift kit, come check us out!
         </Typography>
        </CardContent>
        <CardActions className={ classes.actionsContainer }>
          <Button color="primary" variant="outlined" size="medium" href="/modshop" className={ classes.moreLink }>Find Out More</Button>
        </CardActions>
      </Card>
    </section>
  )
}
