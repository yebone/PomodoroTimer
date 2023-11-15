import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const initialState = {
    countDown: false,
    modes: { pomodoro: 1, shortBreak: 1, longBreak: 1 },
    currentMode: "pomodoro",
    useEffectLoader: true, //For reset btn, in order to use as a dependency in useEffect in timeDisplay components.
    settingToggle: false,
    rounds: 4,
    modeNames: ["pomodoro", "shortBreak", "longBreak"],
    alarmNames: [
      { name: "alarm1", value: "alarm1" },
      { name: "clockAlarm", value: "clockAlarm" },
      { name: "Bird", value: "bird" },
    ],
    currentAlarm: "bird",
    alarmVolume: 0.5,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { ...state, dispatch };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useGlobalState = () => useContext(StateContext);
