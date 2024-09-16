import { StyledBorderBeam } from './border-beam.styles';
import { FC } from 'react';

type BorderBeamProps = {
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
};

const BorderBeam: FC<BorderBeamProps> = ({
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <>
      <StyledBorderBeam
        duration={duration}
        anchor={anchor}
        borderWidth={borderWidth}
        colorFrom={colorFrom}
        colorTo={colorTo}
        delay={delay}
      />
    </>
  );
};

export default BorderBeam;
