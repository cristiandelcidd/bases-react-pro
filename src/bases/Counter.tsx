import { FC, useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

const Counter: FC<Props> = ({ initialValue = 0 }) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleIncrement = (value: number): void => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <h1>Clicks: {clicks}</h1>

      <button onClick={() => handleIncrement(1)}>+1</button>
    </div>
  );
};

export default Counter;
