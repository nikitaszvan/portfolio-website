import styled, { keyframes } from 'styled-components';

type BorderBeamProps = {
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

// Define keyframes for border beam animation
const borderBeamAnimation = keyframes`
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
`;

// Create the styled component
export const StyledBorderBeam = styled.div<BorderBeamProps>`
  --duration: ${({ duration = 15 }) => duration}s;
  --anchor: ${({ anchor = 90 }) => anchor}%;
  --border-width: ${({ borderWidth = 1.5 }) => borderWidth}px;
  --color-from: ${({ colorFrom = "#ffaa40" }) => colorFrom};
  --color-to: ${({ colorTo = "#9c40ff" }) => colorTo};
  --delay: ${({ delay = 0 }) => delay}s;
  pointer-events: none;
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  border: var(--border-width) solid transparent;
  mask-clip: padding-box, border-box;
  mask-composite: intersect;
  mask-image: linear-gradient(transparent, transparent), linear-gradient(white, white);

  &::after {
    --duration: ${({ duration = 15 }) => duration}s;
    --anchor: ${({ anchor = 90 }) => anchor}%;
    --border-width: ${({ borderWidth = 1.5 }) => borderWidth}px;
    --color-from: ${({ colorFrom = "#ffaa40" }) => colorFrom};
    --color-to: ${({ colorTo = "#9c40ff" }) => colorTo};
    --delay: ${({ delay = 0 }) => delay}s;
    content: "";
    position: absolute;
    width: calc(100% - 3px);
    height: 100%;
    animation: ${borderBeamAnimation} var(--duration) linear infinite;
    animation-delay: var(--delay);
    background: linear-gradient(to left, var(--color-from), var(--color-to), transparent);
    offset-anchor: var(--anchor) 50%;
    offset-path: rect(0 auto auto 0 round 100%);
  }
`;
