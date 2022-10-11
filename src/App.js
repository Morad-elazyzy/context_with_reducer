import React, { useReducer, useContext } from "react";
import { DataContext } from "./context/DataContext";
function App() {
  const { count, setCount } = useContext(DataContext);
  return (
    <div className="App" onClick={() => setCount({ type: "incr", payload: 1 })}>
      click {" " + count + " times"}
    </div>
  );
}

export default App;
