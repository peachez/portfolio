import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../scss/About.scss';

export class About extends React.Component {
  render() {
    const bodyText = this.props.bodyText.map((str) => { return (<Typography paragraph={true} >{str}</Typography>); });

    return (
      <div id={"about"} className={"about-cont"}>
        <Typography variant="h2">About</Typography>
        <div className={"content"}>
          <div className={"img"}>
            <img src={this.props.url} alt={this.props.name} />
          </div>
          <div className={"text"}>
            <Typography className={"name-title"}>
              <span className={"name"}>{this.props.name}</span>
              <span className={"title"}>{this.props.title}</span>
            </Typography>
              <div className={"contact-loc"}>
                <Link className={"social linkedin"} href={this.props.social.linkedin}>
                  <LinkedInIcon />
                </Link>
                <Typography component="span" className={"email"}>{this.props.email}</Typography>
                <Typography component="span" className={"city-state"}>{this.props.cityState}</Typography>
              </div>
            <div className={"overview"}>{bodyText}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;