import React from 'react';
import HeaderMenu from "./components/HeaderMenu";
import JumboTron from './components/JumboTron';
import portrait from './images/portrait.png';

function App() {
  return (<div>
    <HeaderMenu />
    <JumboTron name="Kevin Seiter" title="Web Developer" url={portrait} />
  </div>);
}

export default App;
