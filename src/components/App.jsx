import React from 'react';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';
import LandingPage from './landing-page/landing-page.component.jsx';

const App = () => {
  return (
    <div className="main-div">
      <LandingPage />
      <Banner />
      <Resume />
      <Projects />
      <Footer />
    </div>
  )
}

export default App;