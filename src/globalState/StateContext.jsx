import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { fetchDataFromFirestore } from "../modules/fetchDataFromFirestore";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const initialState = {
    ////user's preference
    modes: { pomodoro: 25, shortBreak: 5, longBreak: 15 },
    currentAlarm: "bird",
    alarmVolume: 0.5,

    ////component's state
    countDown: false,
    modeNames: ["pomodoro", "shortBreak", "longBreak"],
    useEffectLoader: true, //For reset btn, in order to use as a dependency in useEffect in timeDisplay components.
    rounds: 4,
    currentMode: "pomodoro",
    alarmNames: [
      { name: "alarm1", value: "alarm1" },
      { name: "clockAlarm", value: "clockAlarm" },
      { name: "Bird", value: "bird" },
    ],
    //model box
    settingToggle: false,
    logInPageToggle: false,
    signUpFormToggle: false,
    addTaskModelToggle: false,
    //userProfile
    profilePopUpMenuToggle: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data(user preferences) from fire store and update at global state
  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     const data = await fetchDataFromFirestore("users", user.uid);
  //     if (data) {
  //       dispatch({ type: "UPDATEUSERPREFERENCES", payload: data });
  //     }
  //   });
  // }, []);

  const data = { ...state, dispatch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useGlobalState = () => useContext(StateContext);
