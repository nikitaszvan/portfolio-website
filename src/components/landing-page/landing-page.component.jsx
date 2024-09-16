import {
  Container,
  Hero,
  TextContainer,
  LogoSvgStyled,
  OverlayContainer,
  LandingPageHeader
} from './landing-page.styles'

import LandingPageBackground from '../landing-page-background/landing-page-background.component';
import Particles from '../particles/particles.component';
import WordRotate from '../word-rotate/word-rotate.component';
import BorderBeam from '../border-beam/border-beam.component';
// import HyperText from '../hyper-text/hyper-text.component';


const LandingPage = () => {

  return (
    <Container>
        <LandingPageBackground />
        <Particles />
        <OverlayContainer>
          <LandingPageHeader>
            <a href="/">
              <LogoSvgStyled/>
            </a>
            <nav>
              <a href="#"><span>&lt;</span> About <span>/&gt;</span></a>
              <a href="#"><span>&lt;</span> Experience <span>/&gt;</span></a>
              <a href="#"><span>&lt;</span> Work <span>/&gt;</span></a>
              <a href="#"><span>&lt;</span> Contact <span>/&gt;</span></a>
            </nav>
            <button>
              Resume
            </button>
          </LandingPageHeader>
          <TextContainer>
            <h1>👋 Hi, I'm Nikita Van.</h1>
            <h1>I build </h1>
            <WordRotate words={['Creative Design.', 'Responsive Interfaces.', 'User-Centered Solutions.', 'Interactive Experiences.', 'Dynamic Applications.']}/>
          </TextContainer>
        </OverlayContainer>
    </Container>
  );
};

export default LandingPage;