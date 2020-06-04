import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../scss/JumboTron.scss';

// const useStyles = makeStyles((theme) => ({

// }));

export class JumboTron extends React.Component {
  render() {
    // const classes = useStyles();
    return (
      <div className={"jumbotron"}>
        <Typography variant="h1">
          <span className={"name"}>{this.props.name}</span>
          <span className={"title"}>{this.props.title}</span>
        </Typography>
        <div className={"img"}>
          <img src={this.props.url} alt={this.props.name} />
        </div>
      </div>
    )
  }
}

export default JumboTron;