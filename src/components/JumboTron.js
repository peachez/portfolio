import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../scss/JumboTron.scss';

// const StyledTypography = withStyles({
//   root: {
//     display:'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-end',
//     color: '#fff',
//     paddingRight: '10%',
//   },
// })(Typography);

export class JumboTron extends React.Component {
  render() {
    // const {props} = this.props; // name, title, url
    return (
      <div class="jumbotron">
        <Typography>
          <span class="name">{this.props.name}</span>
          <span class="title">{this.props.title}</span>
        </Typography>
        <div class="img">
          <img src={this.props.url} alt={this.props.name} />
        </div>
      </div>
    )
  }
}

export default JumboTron