import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "200px",
          margin: "0 auto",
          border: "2px solid blue",
        }}
      >
        <h1>Child</h1>
        <h2>{state}</h2>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decriment
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Incriment
        </button>
      </div>
    </div>
  );
};

export default Counter;
