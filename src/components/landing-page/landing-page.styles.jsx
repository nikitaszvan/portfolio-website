import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  place-content: center flex-start;
  align-items: center;
  background-color: #0a0a0a;
  flex-flow: column;
  gap: 0px;
  height: min-content;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

export const Hero = styled.div`
  display: flex;
  place-content: center;
  align-items: center;
  flex-flow: column;
  gap: 0px;
  height: 100vh;
  max-width: 1440px;
  overflow: visible;
  padding: 0px;
  position: relative;
  width: 100%;
`;

export const NumberColumn = styled.div`
    color: white;
    font-family: 'Jersey 25';
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > h1 {
        font-size: 48px;
        margin: 0;
    }
`

export const TextContainer = styled.div`
    display: flex;
    z-index: 10;
    height: fit-content;
    gap: 2rem;
`

export const HyperTextContainer = styled.div`

`

