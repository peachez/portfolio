import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
//import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 72,
  },
  header: {
    // position: 'fixed',
    width: '100%',
    zIndex: 100,
    // top: 0,
    // left: 0,
  },
  appbar: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(255,255,255,0.12)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // fontFamily: "'Rock Salt', cursive",
    fontSize: 30,
    textAlign: "right",
  },
  toolbar: {
    width: '100%',
    // display: 'flex',
    // justifyContent: 'flex-end',
  },
  menuicon: {
    fontSize: 30,
  },
  mainmenu: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '100%',
    alignItems: 'center',
    // [theme.breakpoints.up('md')]: {
    //   width: '50%',
    //   justifyContent: 'flex-end',
    // }
  },
  mainlink: {
    // minWidth: '200px',
    textAlign: 'center',
    padding: '10px',
    fontSize: '0.8rem',
    '&:hover': {
      background: 'rgba(255,255,255,0.15)'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 'inherit',
      padding: '20px',
    },
  }
}));

export default function HeaderMenu() {
  const classes = useStyles();

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar disableGutters={true} className={classes.toolbar}>
            <Typography className={classes.mainmenu}>
              <Link className={classes.mainlink} href="/" color="textPrimary" underline="none">Home</Link>
              <Link className={classes.mainlink} href="/store" color="textPrimary" underline="none">Products</Link>
              <Link className={classes.mainlink} href="/#about" color="textPrimary" underline="none">About</Link>
              <Link className={classes.mainlink} href="/#contact" color="textPrimary" underline="none">Contact</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

/*
<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon className={classes.menuicon} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Products</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Menu>

            <Typography variant="span" className={classes.title}>
              Peaches
            </Typography>

 */