import styled, { keyframes } from 'styled-components';
import { AnimatedButton } from '../styled-components/styled-components.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  gap: 0px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  padding: 0px;
  position: relative;
`;

export const OverlayContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;

`

export const TextContainer = styled.div`
  font-family: 'Inter';
  color: white;
  z-index: 2;
  text-align: left;
  white-space: pre;
  width: 65%;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 10%;
  
`

export const StyledH1 = styled.h1`
  font-size: 3.8rem;
  font-weight: 600;
  margin-block: 0;
`

export const StyledP = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Jetbrains Mono';
  margin-block: 0.5rem 1rem;
`

export const StyledButton = styled(AnimatedButton)`
  font-size: 16px;
  padding: 1rem 2rem;
`

const RotateSvg = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`

export const SocialContainer = styled.div<{ isIn: boolean, leftOffset: number }>`

  position: fixed;
  width: fit-content;
  height: fit-content;
  left: 5%;
  bottom: 0;
  gap: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    stroke: white;
    width: 1.6rem;
    height: 1.6rem;
    position: relative;
    ${({ isIn = false, leftOffset = 0 }) => !isIn ? `right: calc(${leftOffset}px + 1.6rem + 100% )` : 'right: 0'};
    ${({ isIn = false }) => isIn ? 'transition: right 0.75s cubic-bezier(0.645,0.045,0.355,1)' : 'transition: none'};

    &:nth-of-type(2) {
      transition-delay: 0.25s;
    }

    &:nth-of-type(3) {
      transition-delay: 0.5s;
    }

    &:nth-of-type(4) {
      transition-delay: 0.75s;
    }

    &:nth-of-type(5) {
      transition-delay: 1s;
    }

    &:hover:not(svg:last-child) {
      stroke: var(--accent-color);
    }
  }

    > svg:not(svg:last-child) {
      cursor: pointer;
    }

  > svg:last-child {
    width: 2.6rem;
    height: auto;
    transform-style: preserve-3d;
    animation: ${RotateSvg} 8s linear infinite;
    transform-origin: center;
  }
`



