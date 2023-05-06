import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import TimeDisplay from "./TimeDisplay";
import { useGlobalState } from "../globalState/StateContext";

const Main = () => {
  const { countDown, dispatch } = useGlobalState();
  return (
    <div className=" flex flex-col gap-10 justify-center items-center h-[60%]">
      <div className=" flex gap-2 justify-center">
        <button className="px-3 font-bold py-1 border-2 rounded-3xl border-white ">
          pomodoro
        </button>
        <button className="px-3 font-bold py-1 border-2 rounded-3xl border-white ">
          short break
        </button>
        <button className="px-3 font-bold py-1 border-2 rounded-3xl border-white ">
          long break
        </button>
      </div>

      <div className=" flex justify-center">
        <TimeDisplay />
      </div>

      <div className=" flex gap-3 justify-center items-center">
        <button
          onClick={() => dispatch({ type: "COUNTDOWN", payload: !countDown })}
          className="px-6 font-bold py-2 border-2 rounded-3xl border-white "
        >
          {countDown ? "Pause" : "start"}
        </button>
        <GrPowerReset className=" text-4xl font-bold" />
        <AiFillSetting className=" text-4xl font-bold" />
      </div>
    </div>
  );
};

export default Main;
