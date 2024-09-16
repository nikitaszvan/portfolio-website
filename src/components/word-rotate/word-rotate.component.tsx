import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps } from "framer-motion";
import { MotionH1 } from "./word-rotate.styles"; 


type WordRotateProps = {
  words: string[];
  duration?: number;
  framerProps?: HTMLMotionProps<"h1">;
};

const WordRotate = ({
  words,
  duration = 3500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
}: WordRotateProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <MotionH1
          key={words[index]}
          {...framerProps}
        >
          {words[index]}
        </MotionH1>
      </AnimatePresence>
    </div>
  );
}

export default WordRotate;
