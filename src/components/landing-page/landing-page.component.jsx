import {
  Container,
  Hero,
  Background,
  RadialGradient,
  BallCanvasContainer,
  Ellipse
} from './landing-page.styles'

import LandingPageGradient from '../landing-page-gradient/landing-page-gradient.component.tsx';

const LandingPage = () => {


  return (
    <Container>
      <Hero>
        <Background>
          <RadialGradient />
          <BallCanvasContainer id="container">
            <LandingPageGradient />
          </BallCanvasContainer>
          <Ellipse />
        </Background>
      </Hero>
    </Container>
  );
};

export default LandingPage;