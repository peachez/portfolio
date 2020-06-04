import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
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
          <div className={"basic-info"}>
            <div className={"name-title"}>
              <Typography component="span" className={"name"}>{this.props.name}</Typography>
              <Typography component="span" className={"title"}>{this.props.title}</Typography>
            </div>
            <div className={"contact-loc"}>
              <div className={"social-icons"}>
                <Link className={"social linkedin"} href={this.props.social.linkedin}>
                  <LinkedInIcon />
                </Link>
                <Link className={"social github"} href={this.props.social.github}>
                  <GitHubIcon />
                </Link>
              </div>
              <Typography component="span" className={"email"}>{this.props.email}</Typography>
            </div>
          </div>
        </div>
        <div className={"overview"}>{bodyText}</div>
      </div>
    )
  }
}

export default About;