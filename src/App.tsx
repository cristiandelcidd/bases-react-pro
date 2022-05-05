import "./App.css";
import Counter from "./bases/Counter";
import CounterEffect from "./bases/CounterEffect";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducer";

function App() {
  return (
    <>
      {/* <Counter initialValue={15} />
      <CounterEffect />
      <CounterHook /> */}
      <CounterReducerComponent />
    </>
  );
}

export default App;
