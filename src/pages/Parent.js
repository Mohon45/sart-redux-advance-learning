import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count } = useContext(COUNTER_CONTEXT);
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "200px",
          margin: "0 auto",
          border: "2px solid green",
          marginTop: "50px",
        }}
      >
        <h1>Parent</h1>
        <h2>{count}</h2>
      </div>{" "}
      <br />
      <Child />
    </div>
  );
};

export default Parent;
