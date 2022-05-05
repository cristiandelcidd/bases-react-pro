import { useReducer } from "react";
import { CounterState } from "./interfaces";
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const CounterReducerComponent = () => {
  const [{ counter, changes, previous }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleIncrement = (value: number): void => {
    dispatch(CounterActions.doIncrement(value));
  };

  const handleResetCounter = () => {
    dispatch(CounterActions.doReset());
  };

  return (
    <div>
      <h1>Counter Reducer: {counter}</h1>
      <h2>Previous: {previous}</h2>
      <h3>Changes: {changes}</h3>

      <button onClick={() => handleIncrement(1)}>+1</button>
      <button onClick={() => handleIncrement(10)}>+10</button>
      <button onClick={handleResetCounter}>Reset Counter</button>
    </div>
  );
};

export default CounterReducerComponent;
