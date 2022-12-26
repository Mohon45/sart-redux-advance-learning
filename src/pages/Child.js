import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
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
        <h2>{count}</h2>
        <button onClick={() => setCount(count - 1)}>Decriment</button>
        <button onClick={() => setCount((prvState) => prvState + 1)}>
          Incriment
        </button>
      </div>
    </div>
  );
};

export default Child;
