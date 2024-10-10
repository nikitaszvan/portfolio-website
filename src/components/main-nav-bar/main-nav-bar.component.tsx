import { useRef, useEffect, useState, FC } from 'react';
import { 
    MainNavBarContainer,
    LogoContainer
} from './main-nav-bar.styles';

import { 
    AnimatedButton,
    LogoSvgStyled
 } from '../styled-components/styled-components.styles';


type MainNavBarProps = {
    isIn?: boolean;
}
const MainNavBar: FC<MainNavBarProps> = ({isIn = false}: MainNavBarProps) => {
        const navRef = useRef<HTMLDivElement | null>(null);
        const [navOffset, setNavOffset] = useState(0);

        useEffect(() => {
            let lastScrollTop = 0;
            if (navRef.current) {
                const navOffset = navRef.current.clientHeight + parseFloat(window.getComputedStyle(navRef.current).marginTop);
                setNavOffset(navOffset);
            }
    
            const handleScroll = () => {
                if (navRef.current) {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;
                    const navHeight = navRef.current.clientHeight;
                    const triggerHeight = navHeight * 0.7;
    
                    if (scrollTop > triggerHeight) {
                        if (scrollTop > lastScrollTop) {
                            navRef.current.style.transform = `translateY(-${navHeight}px)`;
                            navRef.current.style.marginTop = `0`;
                        } else {
                            navRef.current.style.transform = 'translateY(0)'; 
                            navRef.current.style.marginTop = `1.5rem`;
                        }
                    } else {
                        navRef.current.style.transform = 'translateY(0)';
                    }
                    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
                }
            };
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

    return (
        <MainNavBarContainer ref={navRef} isIn={isIn} navOffset={navOffset}>
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