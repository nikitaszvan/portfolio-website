import styled from "styled-components";
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

export const LogoSvgStyled = styled(LogoSvg)`
  width: 4rem;
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
    fill: var(--accent-color);
  }

  &:hover mask {
    transform: rotate(20deg);
  }

  &:hover path:nth-of-type(2) {
    transform: rotate(20deg);
  }
`

export const AnimatedButton = styled.button`
    display: flex;
    font-weight: 600;
    color: var(--accent-color);
    border: none;
    background-color: transparent;
    font-family: 'Jetbrains Mono';
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.25s;
    box-shadow: 0.3em 0.3em 0 0 var(--accent-color), inset 0.3em 0.3em 0 0 var(--accent-color);

    &:hover, &:focus { 
      color: black;
      box-shadow: 
      0 0 0 0 var(--accent-color),
      inset 6em 3.5em 0 0 var(--accent-color);
    }
`