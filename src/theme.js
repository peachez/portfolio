import { createMuiTheme } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: { main: '#00264c' }, //purple,
    secondary: green,
    // background: { paper: '#005fc1' }
  },
  status: {
    danger: 'orange',
  },
  // typography: {
  //   fontFamily: ""
  // }
});

export default theme;