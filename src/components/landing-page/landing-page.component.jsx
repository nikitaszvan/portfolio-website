import {
  Container,
  Hero,
  HyperTextContainer,
  NumberColumn,
  TextContainer
} from './landing-page.styles'

import LandingPageBackground from '../landing-page-background/landing-page-background.component';
import Particles from '../particles/particles.component';
import HyperText from '../hyper-text/hyper-text.component';


const LandingPage = () => {


  return (
    <Container>
      <Hero>
        <LandingPageBackground />
        <Particles />
        <TextContainer>
        <NumberColumn>
          <h1>01</h1>
          <h1>02</h1>
          <h1>03</h1>
          <h1>04</h1>
        </NumberColumn>
        <HyperTextContainer>
          <HyperText
            text="< Hello, I'm Nikita >"
          />
          <HyperText
            text="< I'm a Front end Developer >"
          />
          <HyperText
            text="< Where Technical Mastery Meets >"
          />
          <HyperText
            text="< Creative Design >"
          />
        </HyperTextContainer>
        </TextContainer>
      </Hero>

    </Container>
  );
};

export default LandingPage;