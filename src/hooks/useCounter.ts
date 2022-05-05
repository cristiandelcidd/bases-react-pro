import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface HookProps {
  maxCount: number;
}

const useCounter = ({ maxCount = 1 }: HookProps) => {
  const [counter, setCounter] = useState<number>(5);
  const elementToAnimate = useRef<any>(null);

  const timeline = useRef(gsap.timeline());

  const handleIncrement = (): void => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    timeline.current
      .to(elementToAnimate.current, { y: -10, duration: 0.3, ease: "ease.out" })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: "bounce.out" })
      .pause();
  }, []);

  useEffect(() => {
    if (counter < maxCount) return;

    timeline.current.play(0);
  }, [counter]);

  return {
    handleIncrement,
    elementToAnimate,
    counter,
  };
};

export default useCounter;
