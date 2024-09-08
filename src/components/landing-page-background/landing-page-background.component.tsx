import {
    Base,
    Blur,
    FadeContainer,
    FadeLeft,
    FadeRight,
    Background,
    RadialGradient,
    BallCanvasContainer,
    Ellipse
} from './landing-page-background.styles';

import LandingPageGradient from '../landing-page-gradient/landing-page-gradient.component';

const LandingPageBackground = () => 

    <Background>
        <RadialGradient />
        <BallCanvasContainer id="container">
        <LandingPageGradient />
        </BallCanvasContainer>
        <Blur id='blur' />
        <Ellipse />
        <Base />
        <FadeContainer>
        <FadeLeft />
        <FadeRight />
        </FadeContainer>
    </Background>
    ;

    export default LandingPageBackground;


