import React from "react";
import Setting from "../components/setting/Setting";
import { useGlobalState } from "../globalState/StateContext";

const SettingPage = () => {
  const { settingToggle } = useGlobalState();
  return (
    <div
      className={` ${
        settingToggle ? "block" : "hidden"
      }  w-full h-screen z-40 absolute bg-slate-500  flex items-center justify-center `}
    >
      <Setting />
    </div>
  );
};

export default SettingPage;
