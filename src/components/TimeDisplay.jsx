import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { useGlobalState } from "../globalState/StateContext";
import { secToTimeFormatter } from "../modules/secToTimeFormatter";

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

  return (
    <div>
      <h1 className=" text-7xl font-bold">{secToTimeFormatter(count)}</h1>
      <div></div>
    </div>
  );
};

export default TimeDisplay;
