import React from "react";
import { useGlobalState } from "../../globalState/StateContext";

const MainHeaderBtn = ({ name, value }) => {
  const { dispatch, currentMode } = useGlobalState();
  return (
    <button
      onClick={(event) =>
        dispatch({ type: "MODE", payload: event.target.value })
      }
      name={value}
      value={value}
      className={`${
        currentMode === value ? "font-bold border-4 " : "border-2"
      } px-3  py-1  rounded-3xl border-white  text-lg`}
    >
      {name}
    </button>
  );
};

export default MainHeaderBtn;
