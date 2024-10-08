import { useState, useRef, useEffect } from 'react';

import {
  Container,
  TextContainer,
  OverlayContainer,
  SocialContainer,
  StyledH1,
  StyledP,
  StyledButton
} from './landing-page.styles';

import { 
  CollapseAndFade,
} from '../css-animation/css-animation.component';

import LandingPageBackground from '../landing-page-background/landing-page-background.component';
import Particles from '../particles/particles.component';
import WordRotate from '../word-rotate/word-rotate.component';
import MainNavBar from '../main-nav-bar/main-nav-bar.component';


const LandingPage = () => {
  const socialRef = useRef<HTMLDivElement | null>(null);
  const [divOffsetLeft, setDivOffsetLeft] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Delay for 2 seconds before setting the state
          const timer = setTimeout(() => {
            setIsOpen(true);
          }, 1000);

          // Cleanup timer on unmount or if the observer fires again
          return () => clearTimeout(timer);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (socialRef.current) {
      setDivOffsetLeft(socialRef.current.offsetLeft);
    }
  }, [])

  return (
    <Container ref={ref}>
        <LandingPageBackground />
        <Particles />
        <OverlayContainer>
          <MainNavBar isIn={isOpen}/>
          <TextContainer>
            <CollapseAndFade in={isOpen} timeout={0.5} delay={0}>
              <StyledH1>👋 Hi, I'm Nikita Van</StyledH1>
            </CollapseAndFade>
            <CollapseAndFade in={isOpen} timeout={0.5} delay={0.25}>
              <StyledH1>I build </StyledH1>
              <WordRotate words={['Creative Design', 'Responsive Interfaces', 'User-Centered Solutions', 'Interactive Experiences', 'Dynamic Applications']} />
            </CollapseAndFade>
            <CollapseAndFade in={isOpen} timeout={0.5} delay={0.5}>
              <StyledP>& I'm a front-end developer based in Toronto, Canada 🇨🇦</StyledP>
            </CollapseAndFade>
            <CollapseAndFade in={isOpen} timeout={0.5} delay={0.75}>
              <StyledButton>
                Check me out
              </StyledButton>
            </CollapseAndFade>
            </TextContainer>
          <SocialContainer isIn={isOpen} ref={ socialRef } leftOffset={divOffsetLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><title>Twitter</title><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <svg width="147" height="442" viewBox="0 0 147 442" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M74.4998 0.026123L71.9998 239.032M74 317.998V442.002M73.1907 237.198L1.19067 276.198M145.191 281.198L73.1907 320.198" strokeWidth="8"/>
            </svg>
          </SocialContainer> 
        </OverlayContainer>
    </Container>
  );
};

export default LandingPage;