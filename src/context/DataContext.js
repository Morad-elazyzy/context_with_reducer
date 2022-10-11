import { createContext, useReducer } from "react";
import myReducer from "./myReducer";
export const DataContext = createContext();

const ContextProvider = ({ children, props }) => {
  const initState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(myReducer, initState);

  const setCount = (arg) => dispatch(arg);

  return (
    <DataContext.Provider value={{ count: state.count, setCount }} {...props}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
