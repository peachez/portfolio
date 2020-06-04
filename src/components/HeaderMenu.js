import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

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
      <Router>
        <AppBar position="static" className={"app-bar"}>
          <Toolbar disableGutters={true} className={"toolbar"}>
            <Typography className={"nav-links"}>
              <MuiLink href="/portfolio" color="textPrimary" underline="none">Home</MuiLink>
              <MuiLink href="/portfolio/store" color="textPrimary" underline="none">Products</MuiLink>
              <Link smooth to="/portfolio#about" className={"MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorTextPrimary"}>About</Link>
              <Link smooth to="/portfolio#contact" className={"MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorTextPrimary"}>Contact</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Router>
    </div>
  );
}
