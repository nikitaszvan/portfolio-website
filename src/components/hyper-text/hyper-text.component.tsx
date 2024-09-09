import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { HyperTextContainer } from "./hyper-text.styles";
import GradientHoverText from "../gradient-hover-text/gradient-hover-text.component";

type HyperTextProps = {
  text: string;
  duration?: number;
  framerProps?: Variants;
  animateOnLoad?: boolean;
}

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const HyperText = ({
  text,
  duration = 1600,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  animateOnLoad = true,
}: HyperTextProps) => {
  const [displayText, setDisplayText] = useState(text.split(""));
  const [trigger, setTrigger] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false); // Add state for animation completion
  const interations = useRef(0);
  const isFirstRender = useRef(true);

  const triggerAnimation = () => {
    interations.current = 0;
    setTrigger(true);
    setAnimationComplete(false); // Reset animation complete state
  };

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (!animateOnLoad && isFirstRender.current) {
          clearInterval(interval);
          isFirstRender.current = false;
          return;
        }
        if (interations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i <= interations.current
                  ? text[i]
                  : alphabets[getRandomInt(26)],
            ),
          );
          interations.current = interations.current + 0.1;
        } else {
          setTrigger(false);
          setAnimationComplete(true); // Set animation complete state
          clearInterval(interval);
        }
      },
      duration / (text.length * 10),
    );
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [text, duration, trigger, animateOnLoad]);

  return (
    <HyperTextContainer>
      {animationComplete ? (
        <GradientHoverText text={text} /> // Render regular text when animation is complete
      ) : (
        <AnimatePresence mode='wait'>
          {displayText.map((letter, i) => (
            <motion.h1
              key={i}
              {...framerProps}
            >
              {letter === " " ? "\u00A0" : letter.toUpperCase()}
            </motion.h1>
          ))}
        </AnimatePresence>
      )}
    </HyperTextContainer>
  );
}

export default HyperText;