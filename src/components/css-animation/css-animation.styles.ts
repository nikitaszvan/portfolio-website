import styled from 'styled-components';

export const CollapseRoot = styled.div<{ timeout: number; delay: number }>`
  --height-timeout: ${({ timeout = 1 }) => timeout }s;
  --opacity-timeout: ${({ timeout = 1 }) => timeout + 1}s;
  --height-delay: ${({ delay = 0 }) => delay}s;
  --opacity-delay: ${({ delay = 0 }) => delay + 0.25}s;
  overflow: hidden;

  > div {
    transition: height var(--height-timeout) ease-out var(--height-delay), opacity var(--opacity-timeout) ease-out var(--opacity-delay);
    overflow: hidden;
  }

  > div > * {
    display: inline-flex; 
  }
 
`;
