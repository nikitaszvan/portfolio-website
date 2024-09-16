import styled from "styled-components";

export const StyledH1 = styled.h1`
  // position: relative;
  // font-size: 48px;
  // font-weight: bold;
  // color: white; /* Text color before hover */
  // background: linear-gradient(to right, #ff7e5f, #feb47b);
  // background-size: cover;
  // display: inline-block;
  // overflow: hidden;
  // -webkit-background-clip: text;
  // background-clip: text;
  // color: transparent;


`

export const GradientWrapper = styled.div`



/* button */
h1 {
  font-family: 'Jersey 25';
  border: none;
  outline: none;
  color: #FFF;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 12px;
  font-size: 64px;
  margin: 0;
}
/* glow */
h1::before {
  content: "";
  background: linear-gradient(
    45deg,
    #FF0000, #FF7300, #FFFB00, #48FF00,
    #00FFD5, #002BFF, #FF00C8, #FF0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 600%;
  z-index: -1;
  width: calc(100% + 4px);
  height:  calc(100% + 4px);
  filter: blur(8px);
  animation: glowing 20s linear infinite;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
  opacity: 0;
}

@keyframes glowing {
  0% {background-position: 0 0;}
  50% {background-position: 400% 0;}
  100% {background-position: 0 0;}
}

/* hover */
h1:hover::before {
  opacity: 1;
}

h1:active:after {
  background: transparent;
}

h1:active {
  color: #000;
  font-weight: bold;
}
`
