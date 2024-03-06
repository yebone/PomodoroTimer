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
      className={`flex text-center items-center justify-center ${
        currentMode === value
          ? "font-semibold border-4 "
          : "font-normal border-2"
      } px-3  py-[8px]  rounded-3xl border-white  `}
    >
      {name}
    </button>
  );
};

export default MainHeaderBtn;
