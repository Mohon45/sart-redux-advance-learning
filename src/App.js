import logo from "./logo.svg";
import "./App.css";
import Parent from "./pages/Parent";
import { createContext, useState } from "react";
import Counter from "./pages/Counter";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };
  return (
    // <COUNTER_CONTEXT.Provider value={value}>
    //   <div className="App">
    //     <Parent />
    //   </div>
    // </COUNTER_CONTEXT.Provider>
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
