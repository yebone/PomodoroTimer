import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { AiFillSetting } from "react-icons/ai";
import { useGlobalState } from "../globalState/StateContext";
const MainFooter = () => {
  const { countDown, dispatch, useEffectLoader } = useGlobalState();
  return (
    <div className=" flex gap-3 justify-center items-center">
      <button
        onClick={() => dispatch({ type: "COUNTDOWN", payload: !countDown })}
        className={`px-6 font-bold py-2 border-4 rounded-3xl border-white text-2xl`}
      >
        {countDown ? "Pause" : "Start"}
      </button>
      <button
        onClick={() => dispatch({ type: "RESET", payload: !useEffectLoader })}
      >
        <GrPowerReset className=" text-4xl font-bold" />
      </button>

      <button
        onClick={() => dispatch({ type: "SETTINGTOGGLE", payload: true })}
      >
        <AiFillSetting className=" text-4xl font-bold" />
      </button>
    </div>
  );
};

export default MainFooter;
