import useCounter from "../hooks/useCounter";

const CounterHook = () => {
  const { counter, elementToAnimate, handleIncrement } = useCounter({
    maxCount: 15,
  });

  return (
    <div>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>

      <button onClick={handleIncrement}>+1</button>
    </div>
  );
};

export default CounterHook;
