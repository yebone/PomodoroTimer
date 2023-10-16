import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const initialState = {
    countDown: false,
    modes: { pomodoro: 25, shortBreak: 5, longBreak: 15 },
    currentMode: "pomodoro",
    // timeAmount: 1800,
    useEffectLoader: true, //For reset btn, in order to use as a dependency in useEffect in timeDisplay components.

    //setting
    settingToggle: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { ...state, dispatch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useGlobalState = () => useContext(StateContext);
