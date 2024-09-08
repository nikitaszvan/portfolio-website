import {
  Container,
  Hero,
} from './landing-page.styles'

import LandingPageBackground from '../landing-page-background/landing-page-background.component';
import Particles from '../particles/particles.component';

const LandingPage = () => {


  return (
    <Container>
      <Hero>
        <LandingPageBackground>
          <Particles/>
        </LandingPageBackground>

      </Hero>
    </Container>
  );
};

export default LandingPage;