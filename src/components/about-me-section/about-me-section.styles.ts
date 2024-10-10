import styled, { keyframes } from "styled-components";
import headshot from '../../assets/headshot.jpeg';

const RotateLights = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

const test= keyframes`
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`

const ReverseRotate= keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`

export const AboutMeContainer = styled.div`
    background-color: var(--background-color);
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const GlowingContainer = styled.div<{ isIn: boolean }>`
    position: absolute;
    ${({ isIn = false }) => isIn ? 'left: 20%': 'left: 50%'};
    ${({ isIn = false }) => isIn ? 'height: 15%': 'height: 35%'};
    ${({ isIn = false }) => isIn ? 'bottom: 60%' : 'bottom: 50%'};
    ${({ isIn = false }) => isIn ? 'transition: all cubic-bezier(0.645,0.045,0.355,1) 1s': 'transition: none'};

    border-radius: 50%;
    aspect-ratio: 1 / 1;
    animation: ${RotateLights} 2.4s linear infinite;
    background-color: #9b59b6;
    background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);


    > span {
        position: absolute;
        border-radius: 50%;
        height: 100%;
        width: 100%;
        background-color: #9b59b6;
        background-image: linear-gradient(#9b59b6, #84cdfa, #5ad1cd);
    }

    > span:nth-of-type(1) {
        filter: blur(5px);
    }

    > span:nth-of-type(2) {
        filter: blur(10px);
    }

    > span:nth-of-type(3) {
        filter: blur(25px);
    }

    > span:nth-of-type(4) {
        filter: blur(50px);
    }

    &::after {
        content: "";
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        background-color: #fff;
        ${({ isIn = false }) => isIn ? 'border: solid 2px #ffffff': 'border: solid 5px #ffffff'};
        ${({ isIn = false }) => isIn ? 'transition: border cubic-bezier(0.645,0.045,0.355,1) 1s': 'transition: none'};
        ${({ isIn = false }) => isIn ? `top: 4px; left: 4px; right: 4px; bottom: 4px;` : `top: 10px; left: 10px; right: 10px; bottom: 10px;`};
        border-radius: 50%;
        background-image: url(${headshot});
        background-size: cover;
        background-position: center;
        animation: ${ReverseRotate} 2.4s linear infinite;
    }
`