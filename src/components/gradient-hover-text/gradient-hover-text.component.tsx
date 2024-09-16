import { useState, MouseEvent, FC } from 'react';
import { 
  GradientWrapper,
  StyledH1,
 } from './gradient-hover-text.styles';

type HoverType = {
  x: number;
  y: number;
};

type GradientHoverTextProps = {
  text: string;
}

const GradientHoverText: FC<GradientHoverTextProps> = ({ text }) => {
  const [hoverPos, setHoverPos] = useState<HoverType>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setHoverPos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <GradientWrapper onMouseMove={handleMouseMove}>
      <StyledH1>{text}</StyledH1>
    </GradientWrapper>
   
  );
};

export default GradientHoverText;  
