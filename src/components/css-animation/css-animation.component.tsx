import React, { useRef, forwardRef } from 'react';
import { Transition } from 'react-transition-group';
import { CollapseRoot } from './css-animation.styles';

type CollapseProps = {
  in: boolean;
  children: React.ReactNode;
  collapsedSize?: string;
  timeout?: number;
  [key: string]: any;
}

export const CollapseAndFade = forwardRef<HTMLDivElement, CollapseProps>(
  ({ in: inProp, children, collapsedSize = '0px', timeout = 300, ...other }, ref) => {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handleEntering = () => {
      if (nodeRef.current) {
        nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
        nodeRef.current.style.opacity = '1';
      }
    };

    const handleExiting = () => {
      if (nodeRef.current) {
        nodeRef.current.style.height = collapsedSize;
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
          ref={nodeRef}
          style={{ overflow: 'hidden', transition: `height ${timeout}ms ease, opacity ${timeout}ms ease` }}
          {...other}
        >
          <div ref={contentRef} style={{ opacity: inProp ? 1 : 0 }}>
            {children}
          </div>
        </CollapseRoot>
        )}
      </Transition>
    );
  }
);