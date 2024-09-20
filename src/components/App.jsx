
import LandingPage from './landing-page/landing-page.component';
import AboutMeSection from './about-me-section/about-me-section.component';
import './App.scss';

const App = () => {
  return (
    <div className="main-div">
      <LandingPage />
      <AboutMeSection />
    </div>
  )
}

export default App;