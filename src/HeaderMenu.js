import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 72,
  },
  header: {
    position: 'fixed',
    width: '100%',
    zIndex: 100,
    top: 0,
    left: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "'Rock Salt', cursive",
    fontSize: 30,
    textAlign: "right",
  },
  toolbar: {
    width: '100%'
  },
  menuicon: {
    fontSize: 30,
  }
}));

export default function HeaderMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
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

          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}