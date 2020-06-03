import { createMuiTheme } from '@material-ui/core/styles';

const fontName = "'Raleway', sans-serif;";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0e0e0e',
    },

    text: {
      primary: '#ffffff',
    }
  },
  typography: {
    fontFamily: fontName,
  }
});
  
  // typography: {
  //   fontFamily: fontName,
  //   fontWeightLight: 200,
  //   fontWeightRegular: 400,
  //   fontWeightMedium: 600,
  //   fontWeightBold: 800,
  //   h1: {
  //     fontFamily: fontName,
  //     fontWeight: 200,
  //   },
  //   h2: {
  //     fontFamily: fontName,
  //     fontWeight: 200,
  //   },
  //   h3: {
  //     fontFamily: fontName,
  //     fontWeight: 400,
  //   },
  //   h4: {
  //     fontFamily: fontName,
  //   },
  //   h5: {
  //     fontFamily: fontName,
  //   },
  //   h6: {
  //     fontFamily: fontName,
  //     fontWeight: 600,
  //   },
  //   subtitle1: {
  //     fontFamily: fontName,
  //   },
  //   subtitle2: {
  //     fontFamily: fontName,
  //     fontWeight: 600,
  //   },
  //   body1: {
  //     fontFamily: fontName,
  //   },
  //   body2: {
  //     fontFamily: fontName,
  //   },
  //   button: {
  //     fontFamily: fontName,
  //     fontWeight: 600,
  //   },
  //   caption: {
  //     fontFamily: fontName,
  //   },
  //   overline: {
  //     fontFamily: fontName,
  //   },
  // }
// });

export default theme;