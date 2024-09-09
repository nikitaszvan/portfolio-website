import styled from "styled-components";
import { motion } from 'framer-motion';

export const StyledH1 = styled.h1`
  position: relative;
  font-size: 48px;
  font-weight: bold;
  color: white; /* Text color before hover */
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  background-size: cover;
  display: inline-block;
  overflow: hidden;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit; /* Use the same background image */
    background-clip: padding-box;
    mask-image: radial-gradient(circle, transparent 1rem, rgba(0, 0, 0, 1) 1rem); /* Creates a circular mask */
    transition: mask-image 0.3s ease;
  }

  &:hover::before {
    mask-image: radial-gradient(circle, transparent 1rem, rgba(0, 0, 0, 1) 2rem);
  }
`

// export const MotionDiv = styled(motion.div)`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5));

//     pointer-events: none;
//     transition: opacity 0.3s ease;
// `


// export const GradientWrapper = styled.div`
//     display: inline-block;
//     position: relative;
//     cursor: pointer;

//     &:hover ${StyledH1} {
//         opacity: 1;
//     }
// `
