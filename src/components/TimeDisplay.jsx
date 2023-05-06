import React, { useState } from "react";
import { useInterval } from "../hooks/countdown";
import { useGlobalState } from "../globalState/StateContext";

const TimeDisplay = () => {
  const { countDown, timeAmount } = useGlobalState();

  const [count, setCount] = useState(timeAmount);

  //Custom hook use to countdown the time!
  useInterval(
    () => {
      setCount((count) => count - 1);
    },
    1000,
    countDown
  );

  function convertSecondsToTime(given_seconds) {
    const hours = Math.floor(given_seconds / 3600);
    const minutes = Math.floor((given_seconds - hours * 3600) / 60);
    const seconds = given_seconds - hours * 3600 - minutes * 60;

    const arr = hours === 0 ? [minutes, seconds] : [hours, minutes, seconds];

    return arr.map((item) => item.toString().padStart(2, "0")).join(":");
  }

  return (
    <div>
      <h1 className=" text-7xl font-bold">{convertSecondsToTime(count)}</h1>
    </div>
  );
};

export default TimeDisplay;
