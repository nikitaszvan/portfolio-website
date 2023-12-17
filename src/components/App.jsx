import React from 'react';
import Header from './Header.jsx';
import AboutMe from './AboutMe.jsx';
import Banner from './Banner.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';

const App = () => {
  return (
    <div className="main-div">
      <Header />
      <AboutMe />
      <Banner />
      <Resume />
      <Projects />
    </div>
  )
}

export default App;