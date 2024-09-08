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

export const Background = styled.div`
  position: absolute;
  width: 1200px;
  height: 800px;
  background-color: #0a0a0a;
  left: 50%;
  bottom: -100px;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 0;
`;

export const RadialGradient = styled.div`
  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.5) 0%, rgba(10, 10, 10, 0) 100%);
  filter: blur(57px);
  width: 787px;
  height: 111px;
  left: 50%;
  bottom: 265px;
  transform: translateX(-50%);
`;

export const Ellipse = styled.div`
  position: absolute;
  background: linear-gradient(rgb(255, 255, 255) 0%, rgba(10, 10, 10, 0) 100%);
  border-radius: 100%;
  bottom: -662px;
  height: 955px;
  left: -443px;
  right: -443px;
`;

export const BallCanvasContainer = styled.div`
  position: relative;
  height: 100%;
  background: radial-gradient(circle, rgb(127, 28, 111), rgba(0, 0, 255, 0));
`;
