import { useState, MouseEvent, FC } from 'react';
import { 
  // GradientWrapper,
  StyledH1,
  // MotionDiv
 } from './gradient-hover-text.styles';

type HoverType = {
  x: number;
  y: number;
};

type GradientHoverTextProps = {
  text: string;
}

const GradientHoverText: FC<GradientHoverTextProps> = ({ text }) => {
  // const [hoverPos, setHoverPos] = useState<HoverType>({ x: 0, y: 0 });

  // const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
  //   const { left, top } = e.currentTarget.getBoundingClientRect();
  //   setHoverPos({ x: e.clientX - left, y: e.clientY - top });
  // };

  return (
    // <GradientWrapper onMouseMove={handleMouseMove}>
      <StyledH1>{text}</StyledH1>
   
  );
};

export default GradientHoverText;  
 {/* <MotionDiv
        style={{
          background: `radial-gradient(circle at ${hoverPos.x}px ${hoverPos.y}px, rgba(255, 255, 255, 0.5), transparent)`,
        }}
      />
    </GradientWrapper> */}