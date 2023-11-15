import React from "react";
import Setting from "../components/Setting";
import { useGlobalState } from "../globalState/StateContext";

const SettingPage = () => {
  const { settingToggle } = useGlobalState();
  return (
    <div
      className={` ${
        settingToggle ? "block" : "hidden"
      } fixed w-full  flex justify-center `}
    >
      <Setting />
    </div>
  );
};

export default SettingPage;
