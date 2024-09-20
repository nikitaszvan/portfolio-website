import { useRef, useEffect, FC } from 'react';
import { 
    MainNavBarContainer
} from './main-nav-bar.styles';

import { 
    AnimatedButton,
    LogoSvgStyled
 } from '../styled-components/styled-components.styles';

const MainNavBar: FC = () => {
        const navRef = useRef<HTMLDivElement | null>(null);
    
        useEffect(() => {
            let lastScrollTop = 0;
    
            const handleScroll = () => {
                if (navRef.current) {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const navHeight = navRef.current.clientHeight;
                    console.log(navRef);
                    const navTop = navRef.current.clientTop;
                    const triggerHeight = navHeight * 0.7; // 70% of the navbar height
    
                    if (scrollTop > triggerHeight) {
                        if (scrollTop > lastScrollTop) {
                            // Scrolling down
                            navRef.current.style.transform = `translateY(-${navHeight}px)`; // Hide the navbar
                            navRef.current.style.marginTop = `0`;
                        } else {
                            // Scrolling up
                            navRef.current.style.transform = 'translateY(0)'; // Show the navbar
                            navRef.current.style.marginTop = `1.5rem`;
                        }
                    } else {
                        // Reset position if not scrolled 70% of the height
                        navRef.current.style.transform = 'translateY(0)';
                    }
                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
                }
            };
    
            window.addEventListener('scroll', handleScroll);
    
            // Cleanup listener on unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

    return (
        <MainNavBarContainer ref={navRef}>
            <a href="/">
              <LogoSvgStyled/>
            </a>
            <nav>
              <a href="#"><span>&lt;</span> About <span>/&gt;</span></a>
              <a href="#"><span>&lt;</span> Experience <span>/&gt;</span></a>
              <a href="#"><span>&lt;</span> Work <span>/&gt;</span></a>
              <a href="#"><span>&lt;</span> Contact <span>/&gt;</span></a>
            </nav>
            <AnimatedButton>
              Resume
            </AnimatedButton>
        </MainNavBarContainer>
    )
};

export default MainNavBar;