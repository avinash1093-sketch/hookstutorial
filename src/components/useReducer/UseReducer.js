import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === "DECREMENT") {
    return state - 1;
  }
  if (action.type === "INCREMENT") {
    return state + 1;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state}</p>
      <div>
        <button type="submit" onClick={() => dispatch({ type: "INCREMENT" })}>
          Inc
        </button>
        <button type="submit" onClick={() => dispatch({ type: "DECREMENT" })}>
          Dec
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
