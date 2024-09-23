import { useRef, useState, useEffect, forwardRef, ReactNode, CSSProperties } from 'react';
import { Transition } from 'react-transition-group';
import { 
  CollapseRoot,
} from './css-animation.styles';

type CollapseProps = {
  in: boolean;
  children: ReactNode;
  timeout?: number;
  delay?: number;
  childrenStyle?: CSSProperties;
  [key: string]: any;
}

export const CollapseAndFade = forwardRef<HTMLDivElement, CollapseProps>(
  ({ in: inProp, children, timeout=1, delay=0, childrenStyle={}, ...other }, ref) => {
    const nodeRef = useRef<HTMLDivElement | null>(null);

    const handleEntering = () => {
      if (nodeRef.current) {
        nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
        nodeRef.current.style.opacity = '1';
      }
    };

    const handleExiting = () => {
      if (nodeRef.current) {
        nodeRef.current.style.height = '0';
        nodeRef.current.style.opacity = '0';
      }
    };

    return (
      <Transition
        in={inProp}
        timeout={timeout}
        nodeRef={nodeRef}
        onEntering={handleEntering}
        onExiting={handleExiting}
        {...other}
      >
        {(state) => (
          <CollapseRoot 
            timeout={timeout}
            delay={delay}
          >
              <div ref={nodeRef}>
                {children}
              </div>
          </CollapseRoot>
        )}
      </Transition>
    );
  }
);
