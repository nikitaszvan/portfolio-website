import { 
    AboutMeContainer,
    GlowingContainer,
} from "./about-me-section.styles";

import { useState, useRef, useEffect } from "react";

const AboutMeSection = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef(null);
  
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Delay for 2 seconds before setting the state
              const timer = setTimeout(() => {
                setIsOpen(true);
              }, 300);
      
              // Cleanup timer on unmount or if the observer fires again
              return () => clearTimeout(timer);
            }
          });
        }, {
          threshold: 0.5, // Trigger when at least 50% of the component is in view
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

    return (
        <AboutMeContainer>
            <GlowingContainer isIn={isOpen} ref={ref}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </GlowingContainer>
        </AboutMeContainer>
    );
}

export default AboutMeSection;

