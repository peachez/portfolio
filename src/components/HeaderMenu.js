import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import '../scss/HeaderMenu.scss';

// const useStyles = makeStyles((theme) => ({

// }));

export default function HeaderMenu() {
  // const classes = useStyles();

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={"main-nav-container"}>
      <AppBar position="static" className={"app-bar"}>
        <Toolbar disableGutters={true} className={"toolbar"}>
          <Typography className={"nav-links"}>
            <Link href="/" color="textPrimary" underline="none">Home</Link>
            <Link href="/store" color="textPrimary" underline="none">Products</Link>
            <Link href="/#about" color="textPrimary" underline="none">About</Link>
            <Link href="/#contact" color="textPrimary" underline="none">Contact</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
