import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { useGlobalState } from "../globalState/StateContext";
import { secToTimeFormatter } from "../modules/secToTimeFormatter";
import ProgressBar from "./smallComponents/ProgressBar";

const TimeDisplay = () => {
  const {
    countDown,
    dispatch,
    modes,
    currentMode,
    useEffectLoader,
    currentAlarm,
  } = useGlobalState();
  const [count, setCount] = useState(modes[currentMode] * 60);

  //useEffectLoader to activate useeffect for reset btn,
  useEffect(() => {
    setCount(modes[currentMode] * 60);
  }, [currentMode, useEffectLoader]);

  //Custom hook use to countdown the time!
  useInterval(
    () => {
      if (count > 0) {
        setCount((count) => count - 1);
      } else {
        const alarm = new Audio(`/src/assets/sounds/${currentAlarm}.mp3`);
        alarm.play();
        dispatch({
          type: "FINISH",
          payload:
            Object.keys(modes)[Object.keys(modes).indexOf(currentMode) + 1],
        });
      }
    },
    1000,
    countDown
  );
  useEffect(() => {
    document.title = `${secToTimeFormatter(count)} - ${
      currentMode === "pomodoro" ? "pomodoro timer" : "Time for a break!"
    } `;
  }, [count, currentMode]);

  //calucating progress - 100%[total] -[subtract from 100% to get progress] (countdown[second] * 100%) / totaltime * 60 [total time from global state is in second]
  const progress = 100 - (count * 100) / (modes[currentMode] * 60);

  return (
    <div className=" w-[100vw]  flex flex-col items-center gap-3">
      <h1 className=" text-7xl font-bold">{secToTimeFormatter(count)}</h1>

      <ProgressBar progress={progress} />
    </div>
  );
};

export default TimeDisplay;
