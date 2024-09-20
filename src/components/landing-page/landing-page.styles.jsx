import styled, { keyframes } from 'styled-components';


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
  width: 60%;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;

  > * {
    margin: 0;
  }

  > h1:nth-of-type(2), > div:nth-of-type(1) {
    display: inline-flex;
  }

  > h1 , > div > h1 {
    font-size: 60px;
    font-weight: 600;
  }

  > h1:nth-of-type(2) {
    opacity: 80%;
  }

  > div:nth-of-type(2) {
    position: relative;
    width: fit-content;
    height: fit-content;
  }

  > p {
    width: 70%;
    text-wrap: wrap;
    margin-top: 1rem;
    font-size: 18px;
    font-weight: 400;
    line-height: 2rem;
    opacity: 1;
    font-family: 'Jetbrains Mono';
  }

  > button {
    font-size: 16px;
    padding: 1rem 2rem;
    margin-block: 1rem;
  }
`

const RotateSvg = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`

export const SocialContainer = styled.div`
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


