import React from "react";
import { FcAlarmClock } from "react-icons/fc";
import { useGlobalState } from "../globalState/StateContext";

const SettingFormTimer = () => {
  const { modes } = useGlobalState();
  return (
    <section className=" p-4 gap-2 border-b-2  ">
      <div className=" flex gap-1 items-center">
        <h1 className="text-2xl font-semibold text-gray-400">TIMER</h1>{" "}
        <FcAlarmClock className=" text-2xl" />
      </div>
      <div>
        <h1 className="text-1xl font-bold">Time (minutes)</h1>
        <div className="flex justify-between ">
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="pomodoro"
              className="text-md font-semibold text-[#c0c0c0]"
            >
              Pomodoro
            </label>
            <input
              type="number"
              id="pomodoro"
              name="pomodoro"
              defaultValue={modes.pomodoro}
              min="0"
              className=" w-[50%] p-2 bg-[#efefef] rounded-md "
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="shortBreak"
              className="text-md font-semibold text-[#c0c0c0]"
            >
              Short Break
            </label>
            <input
              type="number"
              id="shortBreak"
              name="shortBreak"
              defaultValue={modes.shortBreak}
              min="0"
              className=" w-[50%] p-2 bg-[#efefef] rounded-md "
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="longBreak"
              className="text-md font-semibold text-[#c0c0c0]"
            >
              Long Break
            </label>
            <input
              type="number"
              id="longBreak"
              name="longBreak"
              defaultValue={modes.longBreak}
              min="0"
              className=" w-[50%] p-2 bg-[#efefef] rounded-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingFormTimer;
