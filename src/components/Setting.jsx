import React from "react";
import { ImCross } from "react-icons/im";
import { useGlobalState } from "../globalState/StateContext";
import SettingForm from "./SettingForm";

const Setting = () => {
  const { dispatch } = useGlobalState();

  return (
    <div
      className={`relative max-w-md w-full bg-white rounded-lg block top-[75px]`}
    >
      {/* header */}
      <div className=" flex justify-between p-4 items-center ">
        <h1 className=" text-xl font-semibold">Setting</h1>
        <button
          onClick={() => dispatch({ type: "SETTINGTOGGLE", payload: false })}
        >
          <ImCross />
        </button>
      </div>
      <hr />
      {/* form  */}
      <SettingForm dispatch={dispatch} />
    </div>
  );
};

export default Setting;
