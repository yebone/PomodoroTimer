import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const initialState = {
    countDown: false,
    timeAmount: 60,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { ...state, dispatch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useGlobalState = () => useContext(StateContext);
