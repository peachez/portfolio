import React from 'react';
import HeaderMenu from "./components/HeaderMenu";
import JumboTron from './components/JumboTron';
import About from './components/About';
import NoSsr from '@material-ui/core/NoSsr';

import DATA from './DATA';
// const DATA = require('./DATA.json');

function App() {
  return (<div>
    <HeaderMenu />
    <NoSsr>
      <JumboTron name={DATA.name} title={DATA.JumboTron.title} url={DATA.JumboTron.url} />
      <About 
        name={DATA.name} 
        title={DATA.About.title} 
        url={DATA.About.url} 
        social={DATA.About.social}
        email={DATA.email}
        cityState={DATA.About.cityState}
        bodyText={DATA.About.bodyText} />
      </NoSsr>
  </div>);
}

export default App;
