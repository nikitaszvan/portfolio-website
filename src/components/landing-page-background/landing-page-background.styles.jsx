import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  width: 900px;
  height: 800px;
  background-color: var(--background-color);
  left: 50%;
  bottom: -100px;
  transform: translateX(-50%);
  overflow: hidden;
  z-index: 0;
`;

export const Blur = styled.div`
    backdrop-filter: blur(80px);
    background: linear-gradient(rgb(10, 10, 10) 0%, rgba(0, 0, 0, 0) 100%);
    flex: 0 0 auto;
    left: 0;
    overflow: visible;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
`
export const FadeContainer = styled.div`
    place-content: center;
    align-items: center;
    inset: 0;
    display: flex;
    flex: 0 0 auto;
    flex-flow: row;
    gap: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
`

export const FadeLeft = styled.div`
    background: linear-gradient(90deg, rgb(10, 10, 10) 0%, rgba(10, 10, 10, 0) 100%);
    flex: 0 0 auto;
    height: 100%;
    position: relative;
    width: 51%;
    left: 1%;
`
export const FadeRight = styled.div`
    background: linear-gradient(270deg, rgb(10, 10, 10) 0%, rgba(10, 10, 10, 0) 100%);
    flex: 0 0 auto;
    height: 100%;
    width: 51%;
    position: relative;
    right: 1%;
`

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
  background: linear-gradient(rgba(255, 255, 255, 0.8) 0%, rgba(10, 10, 10, 0) 100%);
  border-radius: 100%;
  bottom: -700px;
  height: 955px;
  left: -443px;
  right: -443px;
`;

export const Base = styled.div`
    aspect-ratio: 2.34682 / 1;
    background-color: var(--background-color);
    border-radius: 100%;
    bottom: -575px;
    box-shadow: rgb(255, 255, 255) 0px 2px 20px 0px inset, rgba(255, 255, 255, 0.49) 0px -10px 50px 1px;
    flex: 0 0 auto;
    left: -521px;
    position: absolute;
    right: -521px;
}
`

export const BallCanvasContainer = styled.div`
  position: relative;
  height: 100%;
  background: radial-gradient(circle, rgb(127, 28, 111), rgba(0, 0, 255, 0));
`;
