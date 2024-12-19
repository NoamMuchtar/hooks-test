import { useReducer } from "react";

const initalValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initalValue;
    default:
      return initalValue;
  }
};

function Reducer() {
  const [counter, changeCounter] = useReducer(reducer, initalValue);
  return (
    <>
      <p>Counter is {counter}</p>
      <button onClick={() => changeCounter("inc")}>INC</button>
      <button onClick={() => changeCounter("dec")}>DEC</button>
      <button onClick={() => changeCounter("reset")}>RESET</button>
    </>
  );
}

export default Reducer;
