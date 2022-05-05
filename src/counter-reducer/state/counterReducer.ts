import { CounterActions } from "../actions";
import { CounterState } from "../interfaces";

export const counterReducer = (
  state: CounterState,
  action: CounterActions
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };

    case "RESET":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    default:
      return state;
  }
};
