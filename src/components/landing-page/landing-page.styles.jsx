import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0a0a0a;
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

export const LandingPageHeader = styled.div`
  display: flex;
  position: absolute;
  top: 1.5rem;
  width: 70%;
  justify-content: space-around;
  align-items: center;

  > nav {
    display: flex;
    gap: 2rem;
    margin-left: auto;
  }
  
  > button {
    display: flex;
    margin-left: 4rem;
    font-weight: 600;
    color: #64FFDA;
    border: none;
    background-color: transparent;
    font-family: 'Jetbrains Mono';
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.25s;
    box-shadow: 0.3em 0.3em 0 0 #64FFDA, inset 0.3em 0.3em 0 0 #64FFDA;
    &:hover, &:focus { 
      color: black;
      box-shadow: 
      0 0 0 0 #64FFDA,
      inset 6em 3.5em 0 0 #64FFDA;
    }
  }

  > nav > a {
    font-family: 'Jetbrains Mono';
    color: white;
    text-decoration: none;

    > * {
      transition: color 0.3s ease 0.3s;
    }

    > span {
      transition: opacity 0.3s ease;
    }

    > span:nth-of-type(2) {
      letter-spacing: 0.25ch;
    }

    &:hover > span:nth-of-type(1) {
      opacity: 1;
    }

    &:hover > span:nth-of-type(2) {
      opacity: 1;
    }

    &:hover {
      color: #64FFDA;
    }

    &:hover > * {
      color: #64FFDA;
    }

    > span:nth-of-type(1), > span:nth-of-type(2) {
      opacity: 0;
    }
  }

`

export const LogoSvgStyled = styled(LogoSvg)`
  width: 5rem;
  height: auto;
  overflow: visible; /* Ensure overflow is visible */

  path:nth-of-type(1) {
    transition: fill 0.3s ease;
  }

  mask {
    transition: transform 0.3s ease;
    transform-origin: 0% 80%; 
  }

  path:nth-of-type(2) {
    transition: transform 0.3s ease;
    transform-origin: 0% 80%; 
  }

  &:hover path:nth-of-type(1) {
    fill: #64FFDA;
  }

  &:hover mask {
    transform: rotate(20deg);
  }

  &:hover path:nth-of-type(2) {
    transform: rotate(20deg);
  }
`

export const TextContainer = styled.div`
  font-family: 'Inter';
  color: white;
  z-index: 2;
  text-align: left;
  white-space: pre;
  width: 70%;
  position: relative;
  bottom: 4rem;

  // > h3 {
  //   font-size: 36px;
  //   font-family: 'Jetbrains Mono';
  // }

  > * {
    margin: 0;
  }

  > h1:nth-of-type(2), > div:nth-of-type(1) {
    display: inline-flex;
  }

  > h1 , > div > h1 {
    font-size: 68px;
    font-weight: 600;
  }

  > h1:nth-of-type(1) {
    font-size: 60px;
  }

  > div:nth-of-type(2) {
    position: relative;
    width: fit-content;
    height: fit-content;
    // padding: 0.75rem 1rem;
    // color: #64FFDA;
    // border: 1px solid #64FFDA;
    // border-radius: 4px;
    // background-color: transparent;
    // font-family: 'Jetbrains Mono';
  }
`


