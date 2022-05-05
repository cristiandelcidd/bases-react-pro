import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_VALUE = 10;

const CounterEffect = () => {
  const [counter, setCounter] = useState<number>(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleIncrement = (): void => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_VALUE));
  };

  useEffect(() => {
    if (counter < MAXIMUN_VALUE) return;

    console.log(
      "%cSe llegó al nivel máximo...",
      "color: white; background: black; padding: 10px;"
    );

    const timeline = gsap.timeline();

    timeline
      .to(counterElement.current, { y: -20, duration: 0.3, ease: "ease.out" })
      .to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });

    // gsap.to("h2", { y: -20, duration: 0.3, ease: "ease.out" }).then(() => {
    //   gsap.to("h2", { y: 0, duration: 1, ease: "bounce.out" });
    // });
  }, [counter]);

  return (
    <div>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElement}>{counter}</h2>

      <button onClick={handleIncrement}>+1</button>
    </div>
  );
};

export default CounterEffect;
