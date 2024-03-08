import React from "react";
import { useGlobalState } from "../../globalState/StateContext";
import SettingForm from "./SettingForm";
import FullLineBreak from "../smallComponents/FullLineBreak";
import ModelBoxHeader from "../smallComponents/ModelBoxHeader";

const Setting = () => {
  const { dispatch } = useGlobalState();

  return (
    <div className={` max-w-md w-full h-fit block  bg-white rounded-lg   px-3`}>
      <ModelBoxHeader
        header={"Setting"}
        dispatchType={"SETTINGTOGGLE"}
        dispatchPayload={false}
      />
      <FullLineBreak />
      {/* form  */}
      <SettingForm dispatch={dispatch} />
    </div>
  );
};

export default Setting;
