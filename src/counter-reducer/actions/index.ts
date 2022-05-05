export type CounterActions =
  | { type: "INCREMENT"; payload: { value: number } }
  | { type: "RESET" };

//Action Creators
export const doReset = (): CounterActions => ({
  type: "RESET",
});

export const doIncrement = (value: number): CounterActions => ({
  type: "INCREMENT",
  payload: { value },
});
