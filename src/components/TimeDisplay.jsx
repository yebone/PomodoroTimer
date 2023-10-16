import React, { useEffect, useState } from "react";
import { useInterval } from "../hooks/useInterval";
import { useGlobalState } from "../globalState/StateContext";
import { secToTimeFormatter } from "../modules/secToTimeFormatter";

const TimeDisplay = () => {
  const { countDown, dispatch, modes, currentMode, useEffectLoader } =
    useGlobalState();
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
        dispatch({ type: "FINISH" });
      }
    },
    1000,
    countDown
  );

  return <h1 className=" text-7xl font-bold">{secToTimeFormatter(count)}</h1>;
};

export default TimeDisplay;
